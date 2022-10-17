import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./project.css";

export const Project = ({ title, text, srcImage, srcGit, srcWebPage }) => {
  return (
    <article className="grid lg:grid-cols-2 px-5 lg:px-32 2xl:px-52 mb-32 md:mb-44 xl:mb-56 2xl:mb-64">
      <div className="object-contain w-3/2 bg-red-100 shadow-gray-400 shadow-md">
        <img src={srcImage} className="w-full" />
      </div>

      <div className="grid text-white">
        <h3 className="title-projects flex items-center font-extrabold text-4xl ml-5 mr-2 mt-8 md:mb-8 xl:pt-10 lg:mb-0 lg:mt-0 2xl:text-6xl">
          {title}
        </h3>

        <div className="bg-card-project self-start rounded-lg lg:relative right-10 px-4 py-1">
          <p className=" my-3 md:text-xl lg:text-xl">{text}</p>

          <div className="flex justify-start md:justify-end">
            {srcWebPage ? (
              <a
                target={"_blank"}
                href={srcWebPage}
                className="h-12 w-12 md:h-9 md:w-9 flex items-center justify-center cursor-pointer my-2 lg:mt-1 border-2 rounded-full ancor links-projects"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-xl lg:text-xl text-white "
                />
              </a>
            ) : (
              <></>
            )}

            <a
              className="h-12 md:h-9 cursor-pointer my-2 lg:mt-1 ml-2 rounded-full border-2 ancor links-projects"
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
