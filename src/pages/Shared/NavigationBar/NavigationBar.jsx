import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./NavigationBar.css";
import { FaPowerOff, FaSignInAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // Logout button
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/alltoys" activeClassName="active">
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" activeClassName="active">
          Blogs
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/mytoys" activeClassName="active">
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink to="/addtoys" activeClassName="active">
              Add A Toy
            </NavLink>
          </li>
        </>
      )}
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
        {user ? (
          /* Logout Button */
          <button
            onClick={handleLogOut}
            className="flex items-center btn-logout"
          >
            <FaPowerOff className="mr-2" />
            Log Out
          </button>
        ) : (
          <Link to="/login">
            {" "}
            {/* Login Button  */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center">
              <FaSignInAlt className="mr-2" />
              Log In
            </button>
          </Link>
        )}
        {user && (
          <img
            className="rounded-full"
            title={user.displayName || "User"}
            style={{
              width: "40px",
              height: "40px",
              margin: "10px",
              border: "2px solid gray",
            }}
            src={user.photoURL || "https://picsum.photos/200/300"}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
