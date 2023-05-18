import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/images/login/login-img.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <div className="flex ">
            <div className="m-auto">
              <div className="aspect-w-2 aspect-h-3">
                <img
                  className="rounded-lg object-cover"
                  src={loginImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 ">
          <div className="card-body">
            <h1 className="text-center text-3xl font-bold">Login</h1>
            <form>
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
              <p className="text-red-600 text-sm m-1 font-semibold">
                Dynamic Error Message Here
              </p>
              <div className="form-control">
                <input className="btn-login" type="submit" value="Login" />
              </div>
            </form>
            <div className="text-center">
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">Or Sign In with</div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-3 mb-3">
                <button className="btn btn-primary normal-case gap-2">
                  <FcGoogle
                    className="rounded-full text-lg"
                    style={{ backgroundColor: "white" }}
                  />{" "}
                  Login with Google{" "}
                </button>
              </div>
              <h2 className="font-semibold">
                Have not any account?{" "}
                <Link to="/register">
                  <span className="text-[#FF3811]">Register</span>
                </Link>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
