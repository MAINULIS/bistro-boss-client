import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { ImSpoonKnife } from "react-icons/im";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            if(imgRes.success){
                const imgURL = imgRes.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price:parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log("after posting new menu item", data.data);
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item added successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
            }
        })
       
    }
    console.log()

    return (
        <div className="w-full">
            <SectionTitle SubHeading={"what's new"} Heading={"add an item"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-neutral-100 p-5" action="">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-black text-xl">Recipe Name*</span>
                    </div>
                    <input type="text" placeholder=" Recipe Name" {...register("name", {required: true})}
                     className="input input-bordered w-full  bg-white" />
                </label>
                <div className="flex justify-between gap-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black text-xl">Category*</span>
                        </div>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered bg-white ">
                            <option disabled >Pick One</option>
                            <option>Pizza </option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold text-black text-xl">Price*</span>
                        </div>
                        <input {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered w-full bg-white" />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-semibold text-black text-xl">Recipe Details</span>
                    </div>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24 bg-white" placeholder="Recipe Details"></textarea>
                    <div className="label">
                    </div>
                </label>

                <label className="form-control w-full max-w-xs ">
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered bg-white w-full max-w-xs" />
                    
                </label>


                <input className="btn mt-5 bg-[#D1A054] text-white font-semibold hover:bg-[#D1A054] border border-white inline-flex"  value="Add Item"  type="submit"  />
            </form>
        </div>
    );
};

export default AddItem;