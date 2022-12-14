import { useEffect, useState } from "react";
import "./loading.css";

export const Bienvenido = () => {
  const [display, setDisplay] = useState();

  useEffect(() => {
    setTimeout(() => {
      setDisplay("hidden");
    }, 2001);
  }, []);

  return (
    <div
      className={`${display} h-full w-full bg-loading z-50 fixed flex justify-center items-center overflow-hidden`}
    >
      <img src="/logo-favicon-nicolas-potel-junot.svg" className="img-loading" />
      <p className="absolute text-white text-2xl md:text-5xl font-black">
        BIENVENIDO
      </p>
    </div>
  );
};
