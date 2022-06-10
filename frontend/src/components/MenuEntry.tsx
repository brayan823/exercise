import React from "react";

type MenuEntryT = {
  href: string;
  title: string;
  active: string;
};
export const MenuEntry = ({ title, href, active }: MenuEntryT) => {
  return (
    <div className="flex justify-start items-end text-white font-medium font-montserrat transition-colors duration-200 text-center md:first:mr-menuLink ">
      <a
        href={href}
        className={`font-montserrat text-custom text-menuEntry px-1.5 w-full z-10 h-max md: w-0 ${active} `}
      >
        {title}
      </a>
    </div>
  );
};
