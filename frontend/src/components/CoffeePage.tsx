import React from "react";
import { CoffeeCard } from "./CoffeeCard";
import { FOOTER_IMG } from "src/utils/constants";

type CoffeeT = {
  data: Coffee[];
};

export const CoffeePage = ({ data }: CoffeeT) => {
  return (
    <div className=" mt-10">
      <div className="flex flex-col mb-10">
        <h1 className="text-title font-montserrat font-semibold not-italic">
          {"Our beloved coffee"}
        </h1>
        <p className="font-montserrat text-custom mt-4 not-italic tracking-test">
          {
            "Hand-picked, made with love, curated, call it what you want. But we promise you, this will be the best coffe of your life."
          }
        </p>
      </div>
      {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4"> */}
      <div className="grid gap-5 grid-cols-sm md:grid-cols-md lg:grid-cols-lg mb-10">
        {data.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            title={coffee.title}
            type={coffee.type}
            img={coffee.img}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center">
        <p className="font-montserrat text-footer mr-2">{"Made with"}</p>
        <img className="w-9 h-4" src={FOOTER_IMG}></img>
      </div>
    </div>
  );
};
