import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate  = useNavigate()
  const handleAddCoffee = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const chef = e.target.chef.value;
    // const supplier = e.target.supplier.value;
    // const taste = e.target.taste.value;
    // const category = e.target.category.value;
    // const details = e.target.details.value;
    // const photo = e.target.photo.value;

    // const coffeedetails = {
    //   name,
    //   chef,
    //   supplier,
    //   taste,
    //   category,
    //   details,
    //   photo,
    // };
    //  amader desher name bangladesh
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // console.log(newCoffee);

    // send coffee  data to the server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "successfully added user to the server",
            icon: "success",
          });
        }
        console.log(data);
        form.reset();
        navigate("/")

      });
  };
  return (
    <div className="p-15 bg-base-200  rounded-box m-10">
      <div className="p-12 text-center space-y-4 ">
        <h1 className="text-6xl">Add Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border w-full p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Your coffee Name"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter  Quantity"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name of coffee supplier"
              name="supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter coffee taste"
              name="taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Price</label>
            <input
              type="number"
              className="input w-full"
              placeholder="type  price"
              name="price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter coffee details"
              name="details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <label className="label">Photo</label>
          <input
            type="Enter photo URL"
            className="input w-full"
            placeholder="Paste your photo url"
            name="photo"
          />
        </fieldset>
        <input type="submit" className="btn w-full mt-5" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
