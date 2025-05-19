import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // firebase sign in method
    signInUser(email, password)
      .then((userCredencial) => {
        alert("sign in successfull!!");
        navigate("/users");
        console.log(userCredencial.user);

        const signinInfo = {
          email,
          lastSignInTime: userCredencial.user?.metadata?.lastSignInTime,
        };
        // update last sign in to the server
        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signinInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after update patch", data);
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignInUser} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                  New user? please{" "}
                  <Link to="/signup" className="link">
                    Sign Up
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      ˝
    </div>
  );
};

export default Signin;
