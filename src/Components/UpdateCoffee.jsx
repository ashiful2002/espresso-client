import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { name, photo, price, quantity, supplier, taste, _id, details } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const UpdateCoffee = Object.fromEntries(formData.entries());

    console.log(UpdateCoffee);
    alert("updated user");

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
  // position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1000
});
      });
  };
  return (
    <div className="">
      <div className="p-15 bg-base-200  rounded-box m-10">
        <div className="p-12 text-center space-y-4 ">
          <h1 className="text-6xl">Update Coffee</h1>
          <p>
            update your coffee ...... It is a long established fact that a
            reader will be distraceted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            Content here.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border w-full p-4">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Your coffee Name"
                name="name"
                defaultValue={name}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Quantity</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Enter  Quantity"
                name="quantity"
                defaultValue={quantity}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name of coffee supplier"
                name="supplier"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
                name="taste"
                defaultValue={taste}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Price</label>
              <input
                type="number"
                className="input w-full"
                placeholder="type  price"
                name="price"
                defaultValue={price}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
                name="details"
                defaultValue={details}
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Paste your photo url"
              name="photo"
              defaultValue={photo}
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full mt-5"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
