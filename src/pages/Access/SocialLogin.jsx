import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            Swal.fire({
                title: "You Have Been Successfully Sign In",
                showClass: {
                    popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                },
                hideClass: {
                    popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
            });
            navigate(from, {replace: true})
        })
        .catch(error => {
            Swal.fire({
                title: `${error.message}`,
                showClass: {
                    popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                },
                hideClass: {
                    popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
            });
        })
    }

    return (
        <div>
            <div className="mt-5 flex gap-5 justify-center items-center">
                <button className="btn btn-circle btn-outline bg-slate-200  font-bold"><FaFacebookF className="w-7 h-7" /></button>
                <button onClick={handleGoogleLogin}  className="btn btn-circle btn-outline bg-slate-200  font-bold"><FcGoogle className="w-7 h-7" /></button>
                <button className="btn btn-circle btn-outline bg-slate-200 text-gray-800 font-bold"> <FaGithub className="w-7 h-7" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;