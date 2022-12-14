export const NavBarRedes = () => {
  return (
    <div className="z-10 fixed hidden lg:flex flex-col items-center bottom-0 left-4 w-20 h-1/2">
      <a
        className="mt-2 p-3 flex items-center cursor-pointer ancor"
        href="https://github.com/NicolasPotelJunot"
        target="_blank"
      >
        <img className="h-10" src="/githubLogoGradient.svg" />
      </a>
      <a
        className="mt-2 p-3 flex items-center cursor-pointer ancor"
        href="https://www.linkedin.com/in/nicolas-potel-junot-23a747165/"
        target="_blank"
      >
        <img className="h-10" src="/linkedingLogo.svg" />
      </a>
      <a
        className="mt-2 p-3 flex items-center cursor-pointer ancor"
        href="https://api.whatsapp.com/send?phone=3512185215"
        target="_blank"
      >
        <img className="h-10" src="/whatsappLogo.svg" />
      </a>
      <div className="h-full bg-gradient rounded-sm w-2"></div>
    </div>
  );
};
