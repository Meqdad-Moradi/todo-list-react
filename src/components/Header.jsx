import React from "react";
import ToggleForm from "./ToggleForm";

function Header({ onAdd, showForm }) {
   return (
      <header className="header">
         <h1>to do app</h1>
         <ToggleForm onAdd={onAdd} showForm={showForm} />
      </header>
   );
}

export default Header;
