import React from "react";

type CoffeeT = {
  title: string;
  type: string;
  img: string;
};
export const CoffeeCard = ({ title, type, img }: CoffeeT) => {
  const typeClassName =
    type.toLocaleUpperCase() === "ARABIC"
      ? "border-bgType bg-bgType"
      : "border-bgAlternativeType bg-bgAlternativeType";

  return (
    <div className="flex flex-col border border-borderCard border-solid rounded-lg bg-white w-full px-4 md: w-card h-card px-2 pt-4">
      <img
        className="text-sm text-grey mb-4 self-center min-w-img h-img"
        src={img}
      ></img>
      <div className="flex flex-row border-t border-borderDescription justify-between md: mx-2">
        <p className="font-montserrat font-semibold text-description mt-2 md: ml-2 mr-4 ">
          {title}
        </p>
        <div
          className={`flex items-center mt-2 border-2 rounded-sm py-1 px-2 max-h-6 ${typeClassName} `}
        >
          <span className="font-montserrat font-semibold text-primary leading-4 text-type not-italic">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
};
