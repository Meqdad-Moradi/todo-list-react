import React from "react";

function Todos({ todos, handleDelete }) {
   return (
      <div className="todos">
         <ul className="todo-list">
            {todos.map((item, index) => (
               <li
                  key={index}
                  title="Click me to delete"
                  onClick={() => handleDelete(item.id)}
               >
                  {item.task}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Todos;
