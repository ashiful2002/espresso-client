import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((userCredencial) => {
        console.log(userCredencial.user);

        // make user profile

        const userProfile = {
          email,
          ...restFormData,
          creationTime: userCredencial.user?.metadata?.creationTime,
          lastSignInTime: userCredencial.user?.metadata?.lastSignInTime,
        };
        //  save profile info in db

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after profile saved", data);
          });

       
      })
      .catch((err) => {
        console.log(err, "firebase error");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Join our coffee community. Sign up and stay updated!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Full Name"
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />

              <label className="label">Phone</label>
              <input
                name="phone"
                type="text"
                className="input"
                placeholder="Your phone number"
              />

              <label className="label">Address</label>
              <input
                name="address"
                type="text"
                className="input"
                placeholder="Your address"
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Paste photo URL"
              />

              <p className="mt-2">
                Already have an account?{" "}
                <Link to="/signin" className="link">
                  Sign in
                </Link>
              </p>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;



 // const userProfile = {
        //   email,
        //   ...restFormData,
        //   creationTime: result.user?.metadata?.creationTime,
        //   lastSignInTime: result.user?.metadata?.lastSignInTime,
        // };

        // Save user to backend
        // fetch("http://localhost:3000/users", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(userProfile),
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //   if (data.insertedId) {
        //     Swal.fire({
        //       title: "Good job!",
        //       text: "User added successfully!",
        //       icon: "success",
        //     });
        //     console.log("Saved user:", data);
        //   }
        // })
        // .catch((err) => console.error("Save error:", err));