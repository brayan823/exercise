import React from "react";
import { Card } from "./Card";
import { Title } from "./Title";
import { Footer } from "./Footer";

import { COFFEE_TEXTS } from "src/utils/generalTexts";

type CoffeeT = {
  data: Card[];
};

export const CoffeePage = ({ data }: CoffeeT) => {
  return (
    <div className="mt-10">
      <Title
        title={COFFEE_TEXTS.title}
        description={COFFEE_TEXTS.description}
      />
      <div className="grid gap-5 grid-cols-xs sm:grid-cols-sm md:grid-cols-md lg:grid-cols-lg mb-10">
        {data.map((coffee) => (
          <Card
            key={coffee.id}
            title={coffee.title}
            type={coffee.type}
            img={coffee.img}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
