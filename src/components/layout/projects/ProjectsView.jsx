import { Project } from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { TitleGradient } from "../../common/TitleGradient";

AOS.init();

export const ProjectsView = () => {
  return (
    <div id="projects" className="w-full overflow-hidden">
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
        <div className="w-full flex justify-center items-center mb-20 md:mb-32 xl:mb-44 2xl:mb-60">
          <TitleGradient
            title={"MIS PROYECTOS"}
            style={
              "mr-1 font-black text-center text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
            }
          />
          <p className="md:text-xl 2xl:text-3xl">😊</p>
        </div>

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
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
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
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
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
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
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
