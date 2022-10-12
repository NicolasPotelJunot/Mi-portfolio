import { useState } from "react";
import { TitleGradient } from "../../common/TitleGradient";
import { Tooltip } from "@mui/material";
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
    <section className="pt-10 lg:pt-56 grid lg:grid-cols-2 w-full justify-center items-center">
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
          <>{!isActive ? <div className="spin absolute"></div> : <></>}</>
          <button
            onClick={handleButtonSkills}
            className="toggle bg-gradient rounded-full flex flex-col text-xl lg:text-4xl"
          >
            Skills
            <p className="text-sm">click me</p>
          </button>

          {/* contendor de tecnos */}
          <Tooltip title="Paquete de Adobe" placement="left" arrow>
            <li className="i0 bg-gradient rounded-full">
              <div className="d0">
                <img className="h-2/4" src="skills/adobe.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="React.js" placement="left" arrow>
            <li className="i1 bg-gradient rounded-full">
              <div className="d1">
                <img className="h-2/4" src="skills/react.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="HTML CSS JAVASCRIPT" placement="top" arrow>
            <li className="i2 bg-gradient rounded-full">
              <div className="d2">
                <img className="h-2/4" src="skills/basics.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="Boostrap" placement="right" arrow>
            <li className="i3 bg-gradient rounded-full">
              <div className="d3">
                <img className="h-2/4" src="skills/boostrap.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="Material Ui" placement="right" arrow>
            <li className="i4 bg-gradient rounded-full">
              <div className="d4">
                <img className="h-2/4" src="skills/materialUi.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="Tailwind" placement="right" arrow>
            <li className="i5 bg-gradient rounded-full">
              <div className="d5">
                <img className="h-2/4" src="skills/tailwind.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="Node.js" placement="bottom" arrow>
            <li className="i6 bg-gradient rounded-full">
              <div className="d6">
                <img className="h-2/4" src="skills/node.svg" />
              </div>
            </li>
          </Tooltip>
          <Tooltip title="CorelDraw" placement="left" arrow>
            <li className="i7 bg-gradient rounded-full">
              <div className="d7">
                <img className="h-2/4" src="skills/corel.svg" />
              </div>
            </li>
          </Tooltip>
        </ul>
      </div>
    </section>
  );
};
