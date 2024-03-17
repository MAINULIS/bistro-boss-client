import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => console.log(error))

    }

    const navOptions = <>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to="/">DASHBOARD</Link></li>
        <li><Link to="/order/salad">OUR SHOP</Link></li>

    </>
    return (
        <>
            <div className="navbar bg-black fixed z-10 bg-opacity-30 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="font-semibold">
                        <Link className="">BISTRO BOSS</Link>
                        <p className="font-mono">Restaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end font-semibold">
                    {
                        user ? <><button onClick={handleLogOut} className="">Sign Out</button></> : <>
                            <Link to="/login">Login</Link>
                        </>
                    }
                    <Link className="ms-4" to="/profile">
                        <img
                            data-te-toggle="tooltip"
                            title={`Hi! I'm ${user?.displayName}`}
                            src={user?.photoURL || "https://tecdn.b-cdn.net/img/new/avatars/2.webp"}
                            className="w-12 rounded-full"
                            alt="Avatar"
                        />
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Navbar;