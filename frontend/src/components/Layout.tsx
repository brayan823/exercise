import { FC } from "react";

import { Menu } from "./Menu";

export const Layout: FC = ({ children }) => (
  <main className="relative h-screen overflow-x-hidden overflow-y-auto bg-primary">
    <Menu />
    <div className="flex flex-col w-full  bg-primary items-center">
      <div className="h-screen pb-8 px-6 lg:pl-0">{children}</div>
    </div>
  </main>
);
