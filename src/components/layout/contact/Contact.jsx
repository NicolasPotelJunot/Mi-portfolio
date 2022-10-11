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
    <section className="w-3/4 mx-auto mt-10 p-16">
      <TitleGradient title={"Contactame"} style={"lg:text-7xl"} />
      <div className="py-36 grid md:grid-cols-2 mt-16 gap-48 bg-contact">
        <div className="flex justify-center w-full">
          <Form />
        </div>

        <div className="flex flex-col text-white ">
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
                  className="text-xl ml-2 text-white"
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
                  className="text-3xl text-white"
                />
              </a>
              <a
                className="mr-5 flex items-center cursor-pointer w-8 justify-center"
                href="https://www.linkedin.com/in/nicolas-potel-junot-23a747165/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-3xl text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
