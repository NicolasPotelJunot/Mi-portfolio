import React, { useEffect } from "react";
import { ButtonUp } from "../components/common/ButtonUp";
import { About } from "../components/layout/about/About";
import { Banner } from "../components/layout/banner/Banner";
import { Contact } from "../components/layout/contact/Contact";
import { NavBarCommon, NavBarRedes } from "../components/layout/header";
import { ProjectsView } from "../components/layout/projects/ProjectsView";
import { Skills } from "../components/layout/skills/Skills";
import "../styles/styleGlobal.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-light">
      <NavBarCommon />
      <NavBarRedes />
      <ButtonUp />

      <Banner />

      <div data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300">
        <About />
      </div>
      <div className="overflow-hidden w-full">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="1000"
        >
          <Skills />
        </div>
      </div>

      <ProjectsView />

      <div data-aos="zoom-in" data-aos-duration="500">
        <Contact />
      </div>
    </div>
  );
};
