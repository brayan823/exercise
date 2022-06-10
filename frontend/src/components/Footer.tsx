import React from "react";

import { FOOTER_IMG } from "src/utils/constants";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-center pb-4">
      <p className="font-montserrat text-footer mr-2">{"Made with"}</p>
      <img className="w-9 h-4" src={FOOTER_IMG}></img>
    </div>
  );
};
