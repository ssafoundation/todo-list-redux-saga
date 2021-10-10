import React from "react";
import { useSelector } from "react-redux";
import Todoitem from "./Todoitem";

const Todolist = () => {
  let todos = useSelector((state) => state.app);
  console.log("todos", todos);
  return (
    <>
      {todos.map((todo) => {
        return <Todoitem key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default Todolist;
