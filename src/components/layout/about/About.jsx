import { TitleGradient } from "../../common/TitleGradient";
import { RedesAbout } from "./RedesAbout";

export const About = () => {
  return (
    <section id="about" className="flex flex-col md:grid md:grid-cols-6 mb-32 lg:mb-28">
      <div className="md:hidden mx-auto flex items-center">
        <img src="/logo-favicon-nicolas-potel-junot.svg" className="h-5" />
        <TitleGradient
          title={"About"}
          style={"font-bold text-5xl lg:text-7xl xl:text-8xl "}
        />
      </div>

      <div className="px-5 my-10 lg:pt-20 lg:my-0 col-span-3 col-start-2 ">
        <p className="text-primary mb-5 md:text-xl">
          Desarrollador web front-end autodidacta y diseñador gráfico
          publicitario radicado en Argentina.
        </p>

        <p className="text-primary mb-5 md:text-xl">
          Soy una persona comprometida y proactiva en todo lo que realizo tanto
          en lo personal como profesional.
        </p>

        <p className="text-primary md:text-xl">
          Mi creatividad radica en la tecnología, tratanto de aprender día a día
          nuevas herramientas y experimentar nuevos desafíos. Amo lo que hago 💗
        </p>

        <div className=" flex justify-end lg:justify-start mt-10 pr-10">
          <a
            target={"_blank"}
            href="https://drive.google.com/file/d/1bGF597lyiVBlZcwXWujfbVGA1RmV5Rc1/view"
            className="ancor text-center font-bold cursor-pointer px-3 py-2 bg-gradient w-28 lg:text-xl lg:w-36 text-white rounded-lg"
          >
            Mira mi CV
          </a>
        </div>
      </div>

      <h2 className="text-rotate hidden md:flex items-end text-9xl font-bold text-gradient ">
        ABOUT
      </h2>

      <RedesAbout />
    </section>
  );
};
