import { Form } from "./Form";
import "./contact.css";
import { TitleGradient } from "../../common/TitleGradient";
import { Card } from "./Card";

export const Contact = () => {
  return (
    <section
      id="contact"
      className=" xl:w-3/4 mx-auto pt-20 lg:pt-10 lg:px-16 lg:pb-16"
    >
      <TitleGradient
        title={"Contactame"}
        style={"block text-4xl lg:text-7xl text-center mx-auto mb-5"}
      />

      <img src="waves.svg" className="-mb-1 md:hidden" />

      <section className="lg:py-36 py-14 flex flex-col lg:flex-row lg:mt-16 bg-contact justify-center items-center shadow lg:shadow-none">
        <Form
          clases={
            "bg-transparent lg:w-2/5 xl:w-1/3 flex flex-col py-10 px-8 lg:py-5 lg:pl-3 lg:pr-10 justify-center lg:rounded-xl shadow-xl"
          }
        />

        <Card
          clases={
            "text-white bg-gradient px-4 py-6 md:p-4 relative lg:w-1/3 lg:rounded-xl lg:right-6 shadow-slate-500 shadow-lg "
          }
        />
      </section>
    </section>
  );
};
