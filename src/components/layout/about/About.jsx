import { TitleGradient } from "../../common/TitleGradient";
import { RedesAbout } from "./RedesAbout";

export const About = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-6 py-32 lg:py-10">
      <div className="md:hidden mx-auto flex items-center">
        <img src="/isologo-nicolasPotelJunot.svg" className="h-5" />
        <TitleGradient title={"About"} style={"font-bold "} />
      </div>

      <div className="px-5 my-10 lg:pt-20 lg:my-0 col-span-3 col-start-2">
        <p className="text-primary mb-5 md:text-xl md:px-10">
          Desarrollador web front-end autodidacta y diseñador gráfico
          publicitario radicado en Argentina.
        </p>

        <p className="text-primary mb-5 md:text-xl md:px-10">
          Soy un persona comprometida y proactiva en todo lo que realizo tanto
          en lo personal como profesional.
        </p>

        <p className="text-primary md:text-xl md:px-10">
          Mi creatividad radica en la tecnología, tratanto de aprender día a día
          nuevas herramientas y experimentar nuevos
        </p>

        <div className=" flex justify-end lg:justify-start lg:pl-20 mt-10 pr-10">
          <a className="text-center font-bold cursor-pointer px-3 py-2 bg-gradient w-28 lg:text-xl lg:w-36 text-white">
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
