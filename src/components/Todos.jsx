import React from "react";
import { FaTrash } from "react-icons/fa";

function Todos({ todos, handleDelete }) {
   return (
      <div className="todos">
         <ul className="todo-list">
            {todos.map((item, index) => (
               <li key={index}>
                  {item.task}
                  <span
                     className="trash"
                     title="Delete to do!"
                     onClick={() => handleDelete(item.id)}
                  >
                     <FaTrash />
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default Todos;
