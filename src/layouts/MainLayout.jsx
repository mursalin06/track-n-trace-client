import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;