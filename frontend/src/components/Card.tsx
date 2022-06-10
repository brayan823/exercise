import React from "react";

type CardT = {
  title: string;
  type?: string;
  img: string;
};
export const Card = ({ title, type = "", img }: CardT) => {
  const typeClassName =
    !!type.length && type.toLocaleUpperCase() === "ARABIC"
      ? "border-bgType bg-bgType"
      : "border-bgAlternativeType bg-bgAlternativeType";

  return (
    <div className="flex flex-col border border-borderCard border-solid rounded-lg bg-white w-full md: w-card h-card px-2 pt-4">
      <img
        className="text-sm text-grey mb-4 self-center min-w-img h-img"
        src={img}
      ></img>
      <div className="flex flex-row border-t border-borderDescription justify-between mx-2 md: mx-0">
        <p className="font-montserrat font-semibold text-description mt-2 md:ml-0 mr-2 ">
          {title}
        </p>
        {!!type.length && (
          <div
            className={`flex items-center mt-2 border-2 rounded-sm py-1 px-2 max-h-6 ${typeClassName} `}
          >
            <span className="font-montserrat font-semibold text-primary leading-4 text-type not-italic">
              {type}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
