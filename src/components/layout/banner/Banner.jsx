import { TitleGradient } from "../../common/TitleGradient"

export const Banner = () => {
  return (
    <section className="pt-36 md:pt-0 flex flex-col md:flex-row justify-center items-center md:h-screen">
        <img src="/image-banner.png" className="h-72 xl:h-1/2 md:mr-5"/>
        <div className="mt-10 lg:mt-0 md:ml-5">
            <h2 className="text-primary text-2xl md:text-6xl">Hola, me llamo</h2>
            <TitleGradient title={"NICOLAS"} title2={"POTEL JUNOT"} style={"font-bold text-5xl lg:text-7xl xl:text-8xl "}/>
            <h3 className="text-primary text-2xl md:text-6xl">Desarrollador front-end</h3>
        </div>
    </section>
  )
}
