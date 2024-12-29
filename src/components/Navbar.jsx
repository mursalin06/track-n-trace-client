import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {

    const {user} = useContext(AuthContext);
    // console.log(user)

    const links = (
        <>
            <NavLink to="/" className="nav-link">
                <li>Home</li>
            </NavLink>
            <NavLink to="/lost-and-found-items" className="nav-link">
                <li>Lost & Found Items</li>
            </NavLink>
        </>
    );


    return (
        <div className="navbar p-2 rounded-md bg-base-300 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-xl font-bold">Track n Trace</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* LOG-OUT and LOGIN */}
                {user ? <div className="flex items-center gap-5">
                    <p className="text-blue-700 underline font-medium hover:text-cyan-700">Log Out</p>
                    <span className="">
                        <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />
                    </span>
                </div>: <div>
                    <Link to='/login' className="btn ml-3 btn-primary btn-sm px-6">Login</Link>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;