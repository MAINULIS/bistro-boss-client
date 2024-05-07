import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        }
        else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent);
        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name),
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                        navigate('/')
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Transaction completed Successfully. Your TransactionId: ${transactionId}`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
        }
    }

    return (
        <>
            <form className="w-2/3 mx-auto m-8" onSubmit={handleSubmit}>
                <CardElement className="shadow-lg p-3 hover:shadow-xl"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-block mt-12 bg-[#570DF8] text-white hover:bg-[#570DF8] font-bold " type="submit" disabled={!stripe || !clientSecret || processing || transactionId}>
                    Pay
                </button>
                {
                    cardError && <p className="text-red-600 mt-6 text-center text-xl">{cardError}</p>
                }
                {
                    transactionId && <p className="text-green-600 mt-6 text-center text-xl">Transaction completed Successfully. Your TransactionId: {transactionId}</p>
                }
            </form>

        </>
    );
};

export default CheckoutForm;