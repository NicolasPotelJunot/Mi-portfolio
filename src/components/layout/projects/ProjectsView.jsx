import { Project } from "./Project";

export const ProjectsView = () => {
  return (
    <div>
      <Project
        title={"NikAgenda"}
        text={
          "App para que puedas organizarte.  Lista de tareas, calculadora, cronómetro y podes ver el clima de tu ciudad!!"
        }
        srcImage={"/projects/mockup.jpg"}
      />
      <Project
        title={"Dinosaurios Argentinos"}
        text={
        "App con el registro de todos los dinosaurios registrados en mi país. Dinosaurios y desarrollo web mis 2 grandes pasiones en un solo sitio web. ❤"
        }
        srcImage={"/projects/mockup.jpg"}
      />
      <Project
        title={"Southchaing"}
        text={
          "Sitio web para un empresa de domótica en Córdoba, Argentina. Mi primer proyecto de desarrollo web con un cliente real"
        }
        srcImage={"/projects/mockup.jpg"}
      />
    </div>
  );
};
