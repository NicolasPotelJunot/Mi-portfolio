import { useState } from "react";
import { TitleGradient } from "../../common/TitleGradient";
import "./skills.css";

export const Skills = () => {

  const [isActive, setIsActive] = useState("");

  const handleButtonSkills =()=>{
    if (isActive==="") {
        setIsActive("active")
    }else{
        setIsActive("")
    }
  }

  return (
    <section className="h-screen flex">
      {/* <div className="mx-auto flex items-center justify-end w-1/2">
        <TitleGradient
          title={"TECNOLOGIAS"}
          title2={"Y HERRAMIENTAS"}
          style={" "}
        />
        <img
          src="/isologo-nicolasPotelJunot.svg"
          className="h-10 relative bottom-10 right-24"
        />
      </div> */}
      <ul className={`${isActive} menu`}>
        <button onClick={handleButtonSkills} className="toggle bg-gradient rounded-full">Skills</button>
        <li className="i0 bg-gradient rounded-full"><div className="d0">A</div></li>
        <li className="i1 bg-gradient rounded-full"><div className="d1">A</div></li>
        <li className="i2 bg-gradient rounded-full"><div className="d2">A</div></li>
        <li className="i3 bg-gradient rounded-full"><div className="d3">A</div></li>
        <li className="i4 bg-gradient rounded-full"><div className="d4">A</div></li>
        <li className="i5 bg-gradient rounded-full"><div className="d5">A</div></li>
        <li className="i6 bg-gradient rounded-full"><div className="d6">A</div></li>
        <li className="i7 bg-gradient rounded-full"><div className="d7">A</div></li>
      </ul>
    </section>
  );
};
