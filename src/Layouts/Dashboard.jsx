import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus,FaBars } from "react-icons/fa6";
import { FaHome,FaCalendarAlt,FaShoppingBag } from "react-icons/fa";
import { BiSolidWalletAlt } from "react-icons/bi";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


            </div>
            <div className="drawer-side bg-[#D1A054] ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" menu p-4 w-80 min-h-full  uppercase text-black">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home"><FaHome className="w-7 h-5"></FaHome>user Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt className="w-7 h-5"></FaCalendarAlt>reservation</NavLink></li>
                    <li><NavLink to="/dashboard/history"><BiSolidWalletAlt className="w-7 h-5"></BiSolidWalletAlt>Payment History</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/myCart"><FaCartPlus className="w-7 h-5"></FaCartPlus> My Cart
                        <span className="badge badge-secondary">{cart?.length || 0}</span>
                        </NavLink>
                        </li>
                    <div className="divider"></div> 
                    <li><NavLink to="/"><FaHome className="w-7 h-5"></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu"><FaBars className="w-7 h-5"></FaBars>menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag className="w-7 h-5"></FaShoppingBag>shop</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;