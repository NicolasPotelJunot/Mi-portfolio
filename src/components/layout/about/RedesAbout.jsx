import React from "react";

export const RedesAbout = () => {
  return (
    <div className="flex md:hidden items-center mt-10 md:mt-5">        
      <div className="bg-gradient rounded-sm w-1/3 h-1"></div>
      <a
        className="p-3 flex items-center cursor-pointer "
        href="https://github.com/NicolasPotelJunot"
        target="_blank"
      >
        <img className="h-8" src="/githubLogoGradient.svg" />
      </a>
      <a
        className="p-3 flex items-center cursor-pointer"
        href="https://www.linkedin.com/in/nicolas-potel-junot-23a747165/"
        target="_blank"
      >
        <img className="h-8" src="/linkedingLogo.svg" />
      </a>
      <a
        className="p-3 flex items-center cursor-pointer"
        href="https://api.whatsapp.com/send?phone=3512185215"
        target="_blank"
      >
        <img className="h-8" src="/whatsappLogo.svg" />
      </a>
    </div>
  );
};
