import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>

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
                <Link to='/register' className="text-blue-700 underline font-medium">Register</Link>
                <Link to='/signIn' className="btn ml-3 btn-primary btn-md px-6">Sign In</Link>
            </div>
        </div>
    );
};

export default Navbar;