import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/images/register/register-img.png";
import "./Registration.css";
import { AuthContext } from "../../providers/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useSetTitle from "../../hooks/useTitle";

const Registration = () => {
  useSetTitle("Register");

  const { createNewUser, userProfile } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User has created successfully");
        form.reset();
        updateUserProfile(name, photo);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already used. Try with a new email!");
        } else if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters!");
        } else {
          setError(error.message);
        }
        setSuccess("");
      });
  };

  const updateUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    userProfile(profile)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <div className="flex ">
            <div className="m-auto">
              <div className="aspect-w-2 aspect-h-3">
                <img
                  className="rounded-lg object-cover"
                  src={registerImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-center text-3xl font-bold">Register</h1>
            <form onSubmit={handleRegister}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div
                  className="absolute top-10 inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <p className="text-red-600 text-sm m-1 font-semibold">{error}</p>
              <p className="text-green-600 text-sm m-1 font-semibold">
                {success}
              </p>
              <div className="form-control">
                <input
                  className="btn-register"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="text-center font-semibold">
              <h2>
                Already Have An Account?{" "}
                <Link to="/login">
                  <span className="font-semibold text-[#FF3811]">Login</span>
                </Link>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
