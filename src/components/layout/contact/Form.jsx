import { Button, TextField } from "@mui/material";
import "./form.css"

export const Form = () => {
  return (
    <form action="https://formsubmit.co/nicolaspoteljunot@gmail.com" method="POST" className="w-3/4 lg:w-full flex flex-col justify-center lg:items-end ">
      <h3 className="text-white">Enviame un mail 😊</h3>
      <div className="md:w-1/2 mt-5">
        <TextField name="name" color="secondary" fullWidth id="filled-basic" label="Nombre" variant="filled" />
      </div>
      <div className="md:w-1/2 mt-5 ">
        <TextField name="email" color="secondary" fullWidth id="filled-basic" label="Email" variant="filled" />
      </div>
      <div className="md:w-1/2 mt-5">
        <textarea name="mensaje" className="text-gray-800 w-full px-2 pt-2 text-area" placeholder="Mensaje"/>
      </div>
      <div className="md:w-1/2 mt-5">
        <Button type="submit" variant="contained" color="secondary">Enviar</Button>
      </div>

      {/* aditional input formsubmit */}
      <input type="hidden" name="_next" value="http://127.0.0.1:5173/" />
      <input type="hidden" name="_captcha" value="false" />

    </form>
  );
};
