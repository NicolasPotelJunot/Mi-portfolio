import React from "react";
import { ButtonUp } from "../components/common/ButtonUp";
import { About } from "../components/layout/about/About";
import { Banner } from "../components/layout/banner/Banner";
import { Contact } from "../components/layout/contact/Contact";
import { NavBarCommon, NavBarRedes } from "../components/layout/header";
import { ProjectsView } from "../components/layout/projects/ProjectsView";
import { Skills } from "../components/layout/skills/Skills";
import "../styles/styleGlobal.css";

export const App = () => {
  return (
    <div className="bg-light">

      <NavBarCommon />
      <NavBarRedes />
      <ButtonUp />

      <Banner />
      <About />
      <Skills />
      <ProjectsView />
      <Contact />
    </div>
  );
};
