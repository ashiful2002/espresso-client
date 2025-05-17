import React from "react";
import { FaPen, FaRegEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { name, photo, quantity, taste, _id, supplier, details, price } =
    coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:3000/coffees/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted",
              icon: "success",
            });
          }
        })
        .catch((err) => console.log(err));
    });
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="w-[150px] drop-shadow-2xl " src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">{name}</h2>
          <div className="flex justify-between ">
            <div>
              <p>Price: {price} Taka</p>
              <p>Quantity: {quantity} piece</p>
            </div>
            <div className="flex flex-col gap-4 ">
              <Link t={`/coffee/${_id}`} className="btn btn-xs">
                <FaRegEye />
              </Link>
              <Link
                to={`/updatecoffee/${_id}`}
                className="btn btn-xs bg-amber-800 text-white"
              >
                <FaPen />
              </Link>
              <button
                className="btn btn-xs bg-red-600 text-white"
                onClick={() => handleDelete(_id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
