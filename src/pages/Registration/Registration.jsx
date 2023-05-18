import { Link } from "react-router-dom";
import registerImg from "../../assets/images/register/register-img.png";
import "./Registration.css";

const Registration = () => {
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
            <form>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
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
              <p className="text-red-600 text-sm m-1 font-semibold">
                Dynamic Error Message Here
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
