import { Link } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Registrations = () => {
  const {createUser} = useAuth();
    const [passMatch, setPassMatch] = useState(true)
    
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if(password !==confirm_password){
        setPassMatch(false)
    }
    if(password === confirm_password){
      createUser(email, password)
    }
    console.log(email, password, confirm_password)
  }
  return (
    <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
                         
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>
            {
                !passMatch && (
                    <div className="my-2">
                        <p className="text-red-500">Password doesn't match!</p>
                    </div>
                )
            }
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="mt-6">
              <GoogleLogin></GoogleLogin>
            </div>
            <div className="mt-6">
              <p>
                New Here?{"  "}
                <Link to="/login" className="text-red-500">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registrations;
