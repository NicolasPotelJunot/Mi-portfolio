import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./form.css";
import { MsgSend } from "./MsgSend";
import "animate.css";

export const Form = ({ clases }) => {
  const [display, setDisplay] = useState();

  const handleDisplay = () => {
    setDisplay(
      " flex flex-col animate__animated animate__zoomInDown animate__fast "
    );
  };
  return (
    <form
      action="https://formsubmit.co/nicolaspoteljunot@gmail.com"
      method="POST"
      className={clases}
      onSubmit={handleDisplay}
    >
      <MsgSend display={display} />
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
          type="email"
        />
      </div>
      <div className="md:w-1/2 mt-5">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className=""
        >
          Enviar
        </Button>
      </div>

      {/* aditional input formsubmit */}
      <input
        type="hidden"
        name="_next"
        value="https://nicolas-potel-junot.vercel.app/"
      />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};
