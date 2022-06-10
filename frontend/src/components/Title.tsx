import React from "react";

type TitleT = {
  title: string;
  description: string;
};
export const Title = ({ title, description }: TitleT) => {
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-title font-montserrat font-semibold not-italic">
        {title}
      </h1>
      <p className="font-montserrat text-custom mt-4 not-italic tracking-test">
        {description}
      </p>
    </div>
  );
};
