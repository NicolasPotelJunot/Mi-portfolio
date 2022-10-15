import { TitleGradient } from "../../common/TitleGradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const Project = ({ title, text, srcImage, srcGit, srcWebPage }) => {
  return (
    <article className="grid lg:grid-cols-2 px-5 lg:px-32 2xl:px-52 mt-20 lg:mt-32">
      <div className="object-contain w-3/2 md:w-fit ">
        <img src={srcImage} className="w-full" />
      </div>

      <div className="grid text-white ">
        
        <h3 className="text-primary font-extrabold text-4xl mt-3 lg:mt-0 ml-5 mr-2">
          {title}
        </h3>

        <div className="bg-gradient place-self-center self-center rounded-lg lg:relative right-10 px-4 py-1">
          <p className="mt-10 mb-5 md:text-xl lg:text-xl">{text}</p>

          <div className="flex justify-start md:justify-end">
            {srcWebPage ? (
              <a
                target={"_blank"}
                href={srcWebPage}
                className="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center cursor-pointer m-1 border-2 rounded-full ancor"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xl lg:text-3xl text-white "
                />
              </a>
            ) : (
              <></>
            )}

            <a
              className="h-8 lg:h-12 cursor-pointer m-1 rounded-full border-2 ancor"
              href={srcGit}
              target="_blank"
            >
              <img src="githubLogo.svg" className="h-full" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
