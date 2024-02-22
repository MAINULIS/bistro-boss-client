import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;