import { EditTask } from "./EditTask";

export const TodoCard = ({ el, handleDelete, handleCheck,handleEdit }) => {
  return (
    <div>
      <input checked={el.isdone} type="checkbox" name="" id="" onChange={()=>handleCheck(el.id)} />
      <h1>{el.name}</h1>
      <EditTask handleEdit={handleEdit} el={el}/>
      <button onClick={() => handleDelete(el.id)}>Delete</button>
    </div>
  );
};
