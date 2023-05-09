import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/shared/footer/Footer";
import Navbar from "../pages/Home/Home/shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;