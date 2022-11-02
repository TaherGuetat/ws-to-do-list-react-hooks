import { TodoCard } from "./TodoCard";
export const TodoList = ({ List, handleDelete, handleCheck,handleEdit }) => {
  return (
    <div>
      {List.map((el) => (
        <TodoCard
          el={el}
          key={el.id}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};
