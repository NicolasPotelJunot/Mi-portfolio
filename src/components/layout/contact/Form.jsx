import { Input, Textarea, Button } from "@material-tailwind/react";

export const Form = () => {
  return (
    <form className="w-full flex flex-col justify-center items-end">
      <div className="md:w-1/2 mt-5">
        <Input label="Nombre" />
      </div>
      <div className="md:w-1/2 mt-5">
        <Input label="Email" />
      </div>
      <div className="md:w-1/2 mt-5">
        <Textarea label="Mensaje" />
      </div>
      <div className="md:w-1/2 mt-5">
        <Button className="md:w-36">Enviar</Button>
      </div>
    </form>
  );
};
