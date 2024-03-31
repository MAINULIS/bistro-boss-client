import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const { _id, name, image, recipe, price} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item =>{
        console.log(item)
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch("http://localhost:5000/carts" , {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Food Added To Cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "Please Login First To Order The Food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from:location}})
                }
              });
        }
    }

    return (
        <div className="card  bg-neutral-200 shadow-xl text-black">

        <img src={image} alt="image" className="w-[424px] shadow-xl" />
        <p className="absolute right-0 px-2 py-1 text-white bg-slate-900 mt-4 mr-4">${price}</p>

        <div className="card-body items-center text-center pb-4">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions">
                <button onClick={() =>handleAddToCart(item)} className="btn uppercase text-[#BB8506] bg-neutral-300  border-0 border-b-4 border-[#BB8506]">Add To Card</button>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;