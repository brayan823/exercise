import { useRouter } from "next/router";
import { ReactNode } from "react";

const MenuEntry = ({
  href,
  title,
  active,
}: {
  href: string;
  title: ReactNode;
  active: string;
}) => {
  return (
    <a
      className="flex justify-start items-end text-white font-medium font-montserrat transition-colors duration-200 text-center md:first:mr-menuLink "
      href={href}
    >
      {/* <span className={`mr-menuLink font-monserrat text-white ${active}`}> */}
      <p
        className={`font-montserrat text-custom text-menuEntry px-1.5 w-full md: w-0 ${active}`}
      >
        {title}
      </p>
    </a>
  );
};

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
    <div className="flex flex-row	w-full bg-secondary box-border h-menuMobile justify-center md: h-14">
      {/* <span className="flex w-auto absolute align-center items-center font-limelight leading-10 text-bannerMobile m-logoMobile md:fixed text-banner h-7 ml-logo mt-3.5"> */}
      <span className="flex w-auto absolute align-center items-center font-limelight leading-10 text-bannerMobile mt-8 h-auto md:fixed text-banner h-7">
        {"BREWED"}
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
