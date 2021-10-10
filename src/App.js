import "./App.css";
import Todoinput from "./components/ToDoList/Todoinput";
// import Todoitem from "./components/ToDoList/Todoitem";
import Todolist from "./components/ToDoList/Todolist";

function App() {
  return (
    <div className="container">
      <h1>To Do list</h1>
      <Todolist />
      <Todoinput />
    </div>
  );
}

export default App;
