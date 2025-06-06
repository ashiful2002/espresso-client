import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

import { useQuery } from "@tanstack/react-query";

const Users2 = () => {
  // const { deleteUserFromFirebase } = useContext(AuthContext);
  //   const initialUsers = useLoaderData();
  //   const [users, setUsers] = useState(initialUsers);

  const {
    isPending,
    error,
    isError,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      return res.json();
    },
  });

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      //   if (result.isConfirmed) {

      //   }

      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to delete user");
          }
          return res.json();
        })
        .then((data) => {
          console.log("after delete", data);
          if (data.deletedCount) {
            // filter and show user
            // const remainingUser = users.filter((user) => user._id !== id);
            // setUsers(remainingUser);
            // also delete user from firebase
            deleteUserFromFirebase()
              .then(() => {})
              .catch((err) => {
                console.log(err);
              });
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire("Oops", "User was not deleted", "error");
          }
        })
        .catch((err) => {
          console.error("Delete failed:", err);
          Swal.fire("Error", err.message, "error");
        });
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        {" "}
        <span className="loading loading-bars loading-xl"></span>;
      </div>
    );
  }
  if (isError) {
    error("this is error message");
  }
  return (
    <div>
      <div>
        <h1>users: {users.length}</h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={user.photo} alt={user.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user.address}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>+880 {user.phone}</td>
                    <td>
                      <p className="w-[150px]">
                        {user.email ? user.email : "no email "}
                      </p>
                    </td>
                    <td>
                      <button
                        className="cursor-pointer"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users2;
