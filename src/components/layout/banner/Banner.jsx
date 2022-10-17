import { TitleGradient } from "../../common/TitleGradient";

export const Banner = () => {
  return (
    <section className="h-screen mb-12 flex flex-col justify-center items-center md:pt-0 md:mb-0 lg:flex-row">
      <img
        src="/image-banner.png"
        className="h-1/2 sm:h-96 xl:h-1/2 2xl:h-3/5 md:mr-5 cursor"
      />
      <div className="mt-10 lg:mt-0 md:ml-15">
        <h2 className="text-primary text-2xl md:text-6xl">Hola, me llamo</h2>
        <TitleGradient
          title={"NICOLAS"}
          title2={"POTEL JUNOT"}
          style={"font-bold text-5xl lg:text-7xl 2xl:text-8xl md:flex md:my-2 lg:block"}
        />
        <h3 className="text-primary text-2xl md:text-6xl">
          Desarrollador front-end
        </h3>
      </div>
    </section>
  );
};
