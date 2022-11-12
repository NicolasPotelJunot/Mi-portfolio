import { TitleGradient } from "../../common/TitleGradient";
import { RedesAbout } from "./RedesAbout";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:grid md:grid-cols-6 mb-32 lg:mb-28"
    >
      <div className="md:hidden mx-auto flex items-center">
        <img src="/logo-favicon-nicolas-potel-junot.svg" className="h-5" />
        <TitleGradient
          title={"SOBRE MI"}
          style={"mx-3 font-bold text-5xl lg:text-7xl xl:text-8xl "}
        />
      </div>

      <div className="px-3 my-10 lg:pt-20 lg:my-0 col-span-3 col-start-2 ">
        <p className="text-primary mb-5 md:text-xl">
          Desarrollador front-end autodidacta y graduado en diseño gráfico
          publicitario.
        </p>

        <p className="text-primary mb-5 md:text-xl">
          Soy una persona comprometida y proactiva en todo lo que realizo, tanto
          en lo personal como profesional. Orientado siempre a buenas
          experiencias de usuario y enfocado en "pixel perfect".
        </p>

        <p className="text-primary mb-5 md:text-xl">
          Mi creatividad radica en la tecnología, aprendiendo día a día nuevas
          herramientas y experimentar nuevos desafíos.
        </p>

        <p className="text-primary md:text-xl">Me apasiona lo que hago 💗</p>

        <div className=" flex justify-end lg:justify-start mt-10 pr-10">
          <a
            className="ancor text-center font-bold cursor-pointer px-3 py-2 bg-gradient w-28 lg:text-xl lg:w-36 text-white rounded-lg"
            href="cv-NicolasPotelJunot.pdf"
            download="cv Nicolas Potel Junot"
          >
            Mira mi CV
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-rotate hidden md:flex justify-center items-end text-8xl font-bold text-gradient">
          SOBRE MI
        </h2>
      </div>

      <RedesAbout />
    </section>
  );
};
