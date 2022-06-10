import { useRouter } from "next/router";
import { ReactNode } from "react";

import { MenuEntry } from "./MenuEntry";

export const Menu = () => {
  const router = useRouter();

  const menu = [
    {
      title: "Our Coffee",
      href: "/coffees",
    },
    {
      title: "Our Tea",
      href: "/teas",
    },
  ];

  const url = router.pathname;

  const setActiveStyle = (path: string) => {
    return url === path ? "border-border border-b-10" : "mb-2.5";
  };

  return (
    <div className="flex flex-row	w-full bg-secondary box-border h-menuMobile justify-center md:h-14">
      <span className="flex w-auto md:w-screen absolute align-center items-center font-limelight leading-10 text-bannerMobile md:text-banner mt-8 md:mt-4 h-auto md:h-7 md:pl-logo ">
        BREWED
      </span>
      <div className="grid grid-cols-2 w-full md:flex flex-row justify-center">
        {menu.map((entry) => (
          <MenuEntry
            key={entry.title}
            {...entry}
            active={setActiveStyle(entry.href)}
          />
        ))}
      </div>
    </div>
  );
};
