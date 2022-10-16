import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const MsgSend = ({ display = "hidden" }) => {
  return (
    <div
      className={`${display} absolute top-0 left-0 z-10 bg-green-300 h-full w-full text-center items-center justify-center text-white`}
    >
      <div className=" w-64 h-64 lg:w-80 lg:h-80 border-8 rounded-full border-white p-10 flex justify-center items-center text-9xl mb-10">
        <FontAwesomeIcon icon={faCheck} />
      </div>
      <p className="text-3xl lg:text-5xl">Mensaje enviado!</p>
    </div>
  );
};
