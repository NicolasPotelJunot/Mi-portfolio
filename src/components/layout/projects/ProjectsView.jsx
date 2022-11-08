import { Project } from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { TitleGradient } from "../../common/TitleGradient";

AOS.init();

export const ProjectsView = () => {
  return (
    <div id="projects" className="w-full overflow-hidden pt-32 -mt-32">
      <div className="w-full flex justify-center items-center mb-20 md:mb-32 xl:mb-44 2xl:mb-52">
        <TitleGradient
          title={"MIS PROYECTOS"}
          style={
            "mr-1 font-black text-center text-3xl sm:text-5xl md:text-6xl xl:text-7xl"
          }
        />
        <p className="md:text-xl 2xl:text-3xl">😊</p>
      </div>

      <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
        <Project
          title={"SOUTHCHAIN"}
          text={
            "Sitio web para un empresa de domótica en Córdoba, Argentina. Mi primer proyecto de desarrollo web con un cliente real. React, Redux, TailwindCSS y emotion son algunas de las tecnologías que utilicé."
          }
          srcImage={"/projects/southchaing.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/SouthChain.git"}
          srcWebPage={"https://southchain.vercel.app/"}
        />
      </div>
      <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
        <Project
          title={"DINOSAURIOS ARGENTINOS"}
          text={
            "App con el registro de todos los dinosaurios registrados en mi país. Dinosaurios y desarrollo web mis 2 grandes pasiones en un solo sitio web. ❤"
          }
          srcImage={"/projects/dinosaurios-argentinos.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/TaskAndWeatherApp.git"}
          srcWebPage={"https://southchain.vercel.app/"}
        />
      </div>
      <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
        <Project
          title={"NIK-AGENDA"}
          text={
            "LA MEJOR App para que puedas organizarte. Lista de tareas, calculadora, cronómetro y podes ver el clima de tu ciudad!! Para esto proyexto use Material UI y TailWindCSS, React, Redux, redux-persist y CSS vanilla. Espero que te guste y la puedas utilizar 😊"
          }
          srcImage={"/projects/nik-agenda.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/TaskAndWeatherApp.git"}
          srcWebPage={"https://nik-agenda.vercel.app/"}
        />
      </div>
      <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
        <Project
          title={"MI PORTFOLIO"}
          text={
            "Mi Landingpage 🤩 hecha principalmente con : React - Tailwind - Material UI"
          }
          srcImage={"/projects/portfolio.jpg"}
          srcGit={"https://github.com/NicolasPotelJunot/Mi-portfolio.git"}
        />
      </div>
    </div>
  );
};
