import { Project } from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const ProjectsView = () => {
  return (
    <div id="projects" className="w-full overflow-hidden">
      <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="300">
        <Project
          title={"NIK-AGENDA"}
          text={
            "App para que puedas organizarte.  Lista de tareas, calculadora, cronómetro y podes ver el clima de tu ciudad!!"
          }
          srcImage={"/projects/mockup.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/TaskAndWeatherApp.git"}
          srcWebPage={"https://southchain.vercel.app/"}
        />
      </div>
      <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300">
        <Project
          title={"DINOSAURIOS ARGENTINOS"}
          text={
            "App con el registro de todos los dinosaurios registrados en mi país. Dinosaurios y desarrollo web mis 2 grandes pasiones en un solo sitio web. ❤"
          }
          srcImage={"/projects/mockup.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/TaskAndWeatherApp.git"}
          srcWebPage={"https://southchain.vercel.app/"}
        />
      </div>
      <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="300">
        <Project
          title={"SOUTHCHAING"}
          text={
            "Sitio web para un empresa de domótica en Córdoba, Argentina. Mi primer proyecto de desarrollo web con un cliente real"
          }
          srcImage={"/projects/mockup.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/SouthChain.git"}
          srcWebPage={"https://southchain.vercel.app/"}
        />
      </div>
      <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300">
        <Project
          title={"PORTFOLIO"}
          text={
            "Mi Landingpage 🤩 hecha principalmente con React - Tailwind - Material UI"
          }
          srcImage={"/projects/mockup.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/Mi-portfolio.git"}
        />
      </div>
    </div>
  );
};
