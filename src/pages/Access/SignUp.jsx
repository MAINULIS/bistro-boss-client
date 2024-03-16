import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
    const{createUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const newUser = result.user;
            console.log(newUser)
        })
    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss / SignUp</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col md:flex-row-reverse md:m-24">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body text-neutral-500">
                            <h1 className="text-4xl text-center text-black font-semibold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="type here" className="input input-bordered bg-white" />
                                {errors.name && <span className="text-warning"> Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered bg-white" />
                                {errors.email && <span className="text-warning">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-black">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 12,
                                    pattern: /((?=.*[A-Z])||(?=.*[a-z]))(?=.*[@!#$&*])(?=.*[0-9])/
                                })} name="password" className="input input-bordered bg-white" />
                                {errors.password?.type === "minLength" && <p className="text-red-500">Password should be at least six characters</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-500">Please use at least one number,one Alphabet, and one special characters(!@#$&*) </p>}

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] hover:bg-[#D1A0de] border-none text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='text-[#D1A054]'>Already registered? Go to <Link to="/login" className='underline font-semibold'>Log In </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;