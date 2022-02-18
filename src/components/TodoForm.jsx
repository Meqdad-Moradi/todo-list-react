import React, { useState } from "react";

function TodoForm({ addTodo }) {
   const [task, setTask] = useState("");
   const [error, setError] = useState("");

   const sumitForm = (e) => {
      e.preventDefault();

      if (task === "" || task === null) {
         setError("Please insert your task to do!");
         return;
      }

      addTodo({ task });

      setTask("");
   };

   const onFocus = () => {
      setError("");
   };

   const addValue = (e) => {
      setTask(e.target.value);
   };

   return (
      <div className="todo-form-box">
         <form action="/" className="todo-form" onSubmit={sumitForm}>
            <div className="form-control">
               <label htmlFor="task">task to do</label>
               <input
                  type="text"
                  onFocus={onFocus}
                  onChange={addValue}
                  value={task}
               />
               <small>{error}</small>
            </div>

            <button type="submit" className="btn submit-btn">
               save
            </button>
         </form>
      </div>
   );
}

export default TodoForm;
