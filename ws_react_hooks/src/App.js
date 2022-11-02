import "./App.css";
import { useState } from "react";
import { AddTask } from "./Components/AddTask";
import { FilterTask } from "./Components/FilterTask";
import { TodoList } from "./Components/TodoList";

function App() {
  const [List, setList] = useState([
    {
      name: "Html",
      isdone: false,
      id: 0,
    },
    {
      name: "CSS",
      isdone: true,
      id: 1,
    },
  ]);

  const handleAdd = (newTask) => {
    setList([...List, newTask]);
  };
  const handleDelete = (id) => {
    setList(List.filter((el) => el.id !== id));
  };
  const handleCheck = (id) => {
    setList(List.map((el) => (el.id == id ? { ...el, isdone:!el.isdone } : el)));
  };
  const handleEdit=(id,newName)=>{
    setList(List.map(
      (el)=> el.id==id?{...el,name:newName}:el
    ))
  }
  return (
    <div className="App">
      <AddTask handleAdd={handleAdd} />
      <FilterTask />
      <TodoList
        List={List}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
