import { useEffect } from "react";
import { Bienvenido } from "../components/common/bienvenido/Bienvenido";
import { NavBarCommon, NavBarRedes } from "../components/layout/header";
import { ButtonUp } from "../components/common/ButtonUp";
import { Banner } from "../components/layout/banner/Banner";
import { About } from "../components/layout/about/About";
import { Skills } from "../components/layout/skills/Skills";
import { ProjectsView } from "../components/layout/projects/ProjectsView";
import { Contact } from "../components/layout/contact/Contact";
import "../styles/styleGlobal.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-light">
      <Bienvenido />
      <NavBarCommon />
      <NavBarRedes />
      <ButtonUp />

      <Banner />

      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
        <About />
      </div>
      <div className="overflow-hidden w-full">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <Skills />
        </div>
      </div>

      <ProjectsView />

      <Contact />
    </main>
  );
};
