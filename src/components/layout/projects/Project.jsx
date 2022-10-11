import { TitleGradient } from "../../common/TitleGradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const Project = ({ title, text, srcImage, srcGit }) => {
  return (
    <article className="grid lg:grid-cols-2 px-5 md:px-20 xl:px-52 mt-20 lg:mt-32">
      <div className="">
        <div className="flex items-center">
          <img className="h-6 mr-5" src="isologo-nicolasPotelJunot.svg" />
          <TitleGradient
            title={title}
            style="text-4xl md:text-5xl xl:text-7xl"
          />
        </div>
        <p className="mt-10 text-primary mb-5 md:text-xl lg:text-2xl xl:text-3xl">
          {text}
        </p>
      </div>
      <div className="grid justify-center">
        <img src={srcImage} className="w-3/2 md:h-96 object-contain md:ml-10" />

        <div className="flex justify-start md:justify-end mt-5 md:mt-10">
          <a className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-end cursor-pointer md:ml-5 rounded-full bg-gradient">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xl lg:text-3xl mx-auto text-white"
            />
          </a>

          <a className="h-8 lg:h-12 cursor-pointer ml-5" href={srcGit}>
            <img src="githubLogo.svg" className="h-full" />
          </a>
        </div>
      </div>
    </article>
  );
};
