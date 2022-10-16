import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ clases }) => {
  return (
    <div className={clases}>
      <div className="mb-4 flex items-center">
        <p>Mis datos:</p>
      </div>
      <div className="mb-2 flex items-center">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-xl text-white mr-1"
        />
        <p>nicolaspoteljunot@gmail.com</p>
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <p className="pr-2">3512185215</p>
          <a
            className="cursor-pointer flex justify-center items-center"
            href="https://api.whatsapp.com/send?phone=3512185215"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-2xl text-white ancor"
            />
          </a>
        </div>

        <div className="flex">
          <a
            className="mr-2 flex items-center cursor-pointer w-8 justify-center"
            href="https://github.com/NicolasPotelJunot"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-white ancor"
            />
          </a>
          <a
            className="mr-2 flex items-center cursor-pointer w-8 justify-center"
            href="https://www.linkedin.com/in/nicolas-potel-junot-23a747165/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-white ancor"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
