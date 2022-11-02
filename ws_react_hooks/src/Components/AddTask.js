import { useState } from "react";

export const AddTask = ({ handleAdd }) => {
  const [todoname, setTodoname] = useState("");
  const handleChange = (e) => {
    setTodoname(e.target.value);
  };
  const Add=()=>{
    if (todoname.trim()) {
        handleAdd({name:todoname.trim(),id:Math.random(),isdone:false})
        setTodoname('')
    } else {
        alert('please enter new value')
    }
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={todoname} />
      <button onClick={Add} >Add</button>
    </div>
  );
};
