import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
const captchaRef = useRef(null);
const [disabled, setDisabled] = useState(true);
    useEffect(()=> {
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)==true){
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
      

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row md:m-24">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm">
                    <form onSubmit={handleLogin} className="card-body text-neutral-500">
                    <h1 className="text-4xl text-center text-black font-semibold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-black">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered bg-white" required />
                            <label className="label">
                            <label className="label">
                                <p className='text-zinc-600 font-semibold'><small>Forget password? Please <button  className='text-cyan-600 underline'>Reset Password</button> </small> </p>
                            </label>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} placeholder="Type the Captcha" name="captcha" className="input input-bordered bg-white" required />
                            <button onClick={handleCaptcha} className='btn mt-5 btn-outline mx-auto w-1/2 btn-xs'>Validate Captcha</button>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn bg-[#D1A054] hover:bg-[#D1A0de] border-none text-white" type="submit" value="Sign In" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;