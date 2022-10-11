import { Button, TextField } from "@mui/material";
import "./form.css"

export const Form = () => {
  return (
    <form className="w-3/4 lg:w-full flex flex-col justify-center lg:items-end">
      <h3 className="text-primary">Enviame un mail 😊</h3>
      <div className="md:w-1/2 mt-5">
        <TextField color="secondary" fullWidth id="filled-basic" label="Nombre" variant="filled" />
      </div>
      <div className="md:w-1/2 mt-5 ">
        <TextField color="secondary" fullWidth id="filled-basic" label="Email" variant="filled" />
      </div>
      <div className="md:w-1/2 mt-5">
        <textarea className="text-gray-800 w-full px-2 pt-2 text-area" placeholder="Mensaje"/>
      </div>
      <div className="md:w-1/2 mt-5">
        <Button variant="contained" color="secondary">Enviar</Button>
      </div>
    </form>
  );
};
