import "./titleGradient.css";

export const TitleGradient = ({ title, title2 = "", style = "" }) => {
  return (
    <h2
      className={` text-5xl lg:text-7xl xl:text-8xl text-gradient ${style}`}
    >
      <p>{title}</p>
      <p>{title2}</p>
    </h2>
  );
};
