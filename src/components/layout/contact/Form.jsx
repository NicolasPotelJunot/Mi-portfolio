import { Button, TextField } from "@mui/material";
import "./form.css";

export const Form = ({ clases }) => {
  return (
    <form
      action="https://formsubmit.co/nicolaspoteljunot@gmail.com"
      method="POST"
      className={clases}
    >
      <h3 className="text-primary ">Enviame un mail 😊</h3>
      <div className=" mt-5">
        <TextField
          name="name"
          color="secondary"
          fullWidth
          id="filled-basic"
          label="Nombre"
          variant="standard"
          required
        />
      </div>
      <div className=" mt-5 ">
        <TextField
          name="email"
          color="secondary"
          fullWidth
          id="filled-basic"
          label="Email"
          variant="standard"
          required
        />
      </div>
      <div className="md:w-1/2 mt-5">
        <Button type="submit" variant="contained" color="secondary" className="">
          Enviar
        </Button>
      </div>

      {/* aditional input formsubmit */}
      <input type="hidden" name="_next" value="http://127.0.0.1:5173/" />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};
