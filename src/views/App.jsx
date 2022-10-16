import { useEffect } from "react";
import { Loading } from "../components/common/loading/Loading";
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
      <NavBarCommon />
      <NavBarRedes />
      <ButtonUp />

      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
        <Banner />
      </div>

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
      <Loading />
    </main>
  );
};
