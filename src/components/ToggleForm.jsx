import React from "react";
import Button from "./Button";

function ToggleForm({ onAdd, showForm }) {
   return (
      <Button text={!showForm ? "add to do" : "close form"} onClick={onAdd} />
   );
}

export default ToggleForm;
