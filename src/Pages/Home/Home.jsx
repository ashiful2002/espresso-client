import React from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./Components/CoffeeCard";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div>
      <div className="flex  items-center justify-center flex-col gap-4 p-20">
        <p>--- Sip & Savor ---</p>
        <h1 className="font-bold text-3xl md:text-5xl font-mono text-amber-900 ">
          Our Popular Products
        </h1>
        <Link to='/addcoffee' className="bg-amber-800 p-2 text-white font-semibold rounded-3xl px-5">
          Add Coffee <CiCoffeeCup className="inline text-2xl" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {coffees &&
          coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
      </div>
    </div>
  );
};

export default Home;
