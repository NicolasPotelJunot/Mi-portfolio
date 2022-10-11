import "./titleGradient.css";

export const TitleGradient = ({ title, title2 = "", style = "" }) => {
  return (
    <h2
      className={`text-gradient ${style}`}
    >
      <p>{title}</p>
      <p>{title2}</p>
    </h2>
  );
};
