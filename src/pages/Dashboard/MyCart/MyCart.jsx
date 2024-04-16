import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyCart = () => {
    const [cart] = useCart();
    console.log(cart);
const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | MyCart</title>
            </Helmet>
            <SectionTitle
                SubHeading={"My Cart"}
                Heading={"Wanna Add More"}
            ></SectionTitle>
            <div className="text-black uppercase">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total price: ${total}</h3>
            </div>
        </div>
    );
};

export default MyCart;