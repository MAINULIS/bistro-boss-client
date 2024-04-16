import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "DELETE"
             })
             .then(res => res.json())
             .then(data =>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
             })
            }
          });
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | MyCart</title>
            </Helmet>
            <SectionTitle
                SubHeading={"My Cart"}
                Heading={"Wanna Add More"}
            ></SectionTitle>
            <div className="text-black uppercase font-semibold flex justify-evenly h-14 items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total price: ${total}</h3>
                <button className="btn btn-warning btn-sm text-white">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className="text-black">
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="food image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt className="w-5 h-5"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;