import { Form } from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
import { TitleGradient } from "../../common/TitleGradient";

export const Contact = () => {
  return (
    <section id="contact" className=" xl:w-3/4 mx-auto pt-20 lg:pt-10 lg:px-16 lg:pb-16">

      <TitleGradient
        title={"Contactame"}
        style={"block text-4xl lg:text-7xl text-center mx-auto mb-5"}
      />

      <img src="waves.svg" className="-mb-1 md:hidden"/>

      <div className="lg:py-36 pb-10 grid md:grid-cols-2 lg:mt-16 lg:gap-48 bg-contact">
        <div className="flex justify-center w-full">
          <Form />
        </div>

        <div className="grid text-white w-3/4 lg:w-full mx-auto ">
          <div className=" mt-10">
            <h3 className="text-lg">MI EMAIL</h3>
            <p>nicolaspoteljunot@gmail.com</p>
          </div>

          <div className=" mt-10">
            <h3 className="text-lg">PHONE</h3>
            <div className="flex">
              <p className="">3512185215</p>
              <a
                className="cursor-pointer flex justify-center items-center"
                href="https://api.whatsapp.com/send?phone=3512185215"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-xl ml-2 text-white ancor"
                />
              </a>
            </div>
          </div>

          <div className=" mt-10">
            <h3 className="text-lg">SIGUEME</h3>
            <div className="flex py-2">
              <a
                className="mr-5 flex items-center cursor-pointer w-8 justify-center"
                href="https://github.com/NicolasPotelJunot"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-3xl text-white ancor"
                />
              </a>
              <a
                className="mr-5 flex items-center cursor-pointer w-8 justify-center"
                href="https://www.linkedin.com/in/nicolas-potel-junot-23a747165/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl text-white ancor"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
