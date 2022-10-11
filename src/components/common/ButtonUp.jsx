import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons  ";

export const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonUp = () => {
    window,
      scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="w-full flex justify-center fixed -bottom-1 z-30">
          <button
            onClick={handleButtonUp}
            className="w-14 xl:w-20 font-bold text-white bg-gradient xl:h-12 pt-1 xl:py-1 rounded ancor"
          >
            <FontAwesomeIcon icon={faAngleUp} className="text-3xl xl:text-5xl font-bold" />
          </button>
        </div>
      )}
    </>
  );
};
