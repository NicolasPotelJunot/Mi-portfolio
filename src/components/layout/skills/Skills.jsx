import { useState } from "react";
import { TitleGradient } from "../../common/TitleGradient";
import "./skills.css";

export const Skills = () => {
  const [isActive, setIsActive] = useState("");

  const handleButtonSkills = () => {
    if (isActive === "") {
      setIsActive("active");
    } else {
      setIsActive("");
    }
  };

  return (
    <section className="py-10 lg:py-56 grid lg:grid-cols-2 w-full justify-center items-center">

      <div className="flex items-center justify-center lg:justify-end ">
        <TitleGradient
          title={"TECNOLOGIAS"}
          title2={"Y HERRAMIENTAS"}
          style={
            "lg:pl-10 font-bold text-2xl lg:text-3xl md:text-5xl xl:text-7xl mb-10 lg:text-left text-center "
          }
        />
      </div>

      <div className="flex justify-center lg:justify-start lg:ml-32 ml-0">
        <ul className={`${isActive} menu`}>
          <button
            onClick={handleButtonSkills}
            className="toggle bg-gradient rounded-full"
          >
            Skills
          </button>
          <li className="i0 bg-gradient rounded-full">
            <div className="d0">A</div>
          </li>
          <li className="i1 bg-gradient rounded-full">
            <div className="d1">A</div>
          </li>
          <li className="i2 bg-gradient rounded-full">
            <div className="d2">A</div>
          </li>
          <li className="i3 bg-gradient rounded-full">
            <div className="d3">A</div>
          </li>
          <li className="i4 bg-gradient rounded-full">
            <div className="d4">A</div>
          </li>
          <li className="i5 bg-gradient rounded-full">
            <div className="d5">A</div>
          </li>
          <li className="i6 bg-gradient rounded-full">
            <div className="d6">A</div>
          </li>
          <li className="i7 bg-gradient rounded-full">
            <div className="d7">A</div>
          </li>
        </ul>
      </div>
      
    </section>
  );
};
