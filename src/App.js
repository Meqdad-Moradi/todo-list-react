import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
   const [showForm, setShowForm] = useState(false);
   const [todos, setTodos] = useState([]);

   //  toggle add to do form
   const toggleForm = () => {
      setShowForm(!showForm);
   };

   //  add to do function
   const addTodo = (todo) => {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newTask = { id, ...todo };
      setTodos([...todos, newTask]);

      let myTodo;
      if (localStorage.getItem("todo") === null) {
         myTodo = [];
      } else {
         myTodo = JSON.parse(localStorage.getItem("todo"));
      }

      myTodo.push(newTask);
      localStorage.setItem("todo", JSON.stringify(myTodo));
   };

   // load data from local storage
   useEffect(() => {
      let myTodo;
      if (localStorage.getItem("todo") === null) {
         myTodo = [];
      } else {
         myTodo = JSON.parse(localStorage.getItem("todo"));
      }

      setTodos(myTodo);
   }, []);

   // delete todo
   const deleteTodo = (itemId) => {
      const id = itemId;
      const newTodos = todos.filter((item) => item.id !== id);
      setTodos(newTodos);

      // delete also the specific item form local storage

      const myTodos = JSON.parse(localStorage.getItem("todo"));
      const targetItem = myTodos.find((item) => item.id === id);
      const index = myTodos.indexOf(targetItem);

      myTodos.splice(index, 1);

      localStorage.setItem("todo", JSON.stringify(newTodos));
   };

   return (
      <div className="container">
         <Header onAdd={toggleForm} showForm={showForm} />
         {showForm && <TodoForm addTodo={addTodo} />}
         {todos.length === 0 ? (
            <p className="list-info">your TO DO list is empty !</p>
         ) : (
            <Todos todos={todos} handleDelete={deleteTodo} />
         )}
      </div>
   );
}

export default App;
