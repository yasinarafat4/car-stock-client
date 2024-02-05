import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useSetTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
  useSetTitle("My Profile");

  const { user } = useContext(AuthContext);

  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white shadow-md p-6 rounded-lg">
      {/* Dynamic page title */}

      <div className="flex justify-center">
        <img
          src={
            user
              ? user?.photoURL
              : "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
          }
          className="w-24 h-24 lg:w-40 lg:h-40 rounded-full"
        />
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">
          {user ? user?.displayName : "No user found"}
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-base">
          <span className="font-semibold">Email:</span>{" "}
          {user ? user?.email : "No email found"}
        </p>

        <Link to={"/mytoys"}><button className="text-xl w-32 h-10 md:h-14 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
          <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
          <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
          My Toys
        </button></Link>

        <Link to={'/addtoys'}><button className="text-xl w-32 h-10 md:h-14 text-white bg-sky-950 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">
          Add Toy
          <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 w-32 h-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 w-28 h-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 w-24 h-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 w-20 h-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
          <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] w-16 h-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        </button></Link>
      </div>
      <div className="mt-6">
        <p className="text-gray-600 dark:text-white font-semibold">
          Last Sign-In:
        </p>
        <p className="text-gray-800 dark:text-gray-300">
          {new Date(
            user ? user?.metadata?.lastSignInTime : "No time found"
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
