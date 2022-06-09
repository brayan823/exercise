import { FC } from "react";

import { Menu } from "./Menu";

export const Layout: FC = ({ children }) => (
  // <main className="relative h-screen overflow-hidden text-gray-800 bg-gray-100">
  <main className="relative h-screen text-gray-800 bg-gray-100">
    <Menu />
    <div className="flex flex-col w-full md:space-y-4 bg-primary items-center">
      <div className="h-screen pb-24 overflow-y-auto px-6 md:pr-2">
        {children}
      </div>
    </div>
  </main>
);
