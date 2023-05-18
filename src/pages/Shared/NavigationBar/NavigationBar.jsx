import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./NavigationBar.css";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const NavigationBar = () => {
  const navItems = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allToys" activeClassName="active">
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" activeClassName="active">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="/myToys" activeClassName="active">
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink to="/addToys" activeClassName="active">
          Add A Toy
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar md:pt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 text-black rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link to="/">
          <img className="w-9/12 md:w-3/5 lg:w-3/5" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1  font-bold gap-2">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {/* Logout Button */}
        <button className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <FaSignOutAlt className="mr-2" />
          Log Out
        </button>

        {/* Login Button */}
        <Link to="/login">
          {" "}
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaSignInAlt className="mr-2" />
            Log In
          </button>
        </Link>
        <img
          className="rounded-full"
          title="User"
          style={{
            width: "40px",
            height: "40px",
            margin: "10px",
            border: "2px solid white",
          }}
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavigationBar;
