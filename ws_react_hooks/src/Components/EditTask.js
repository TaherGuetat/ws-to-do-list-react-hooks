import Modal from "react-modal";
import React from "react";
import { useState } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export function EditTask({handleEdit,el}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const[todoname,setTodoname]=React.useState(el.name)
  const handleChange=(e)=>{
    setTodoname(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (todoname.trim()) {
        handleEdit(el.id,todoname.trim())
        setTodoname('')
        closeModal()
    } else {
        alert('hello')
    }
    
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>Edit task</div>
        <form onSubmit={handleSubmit}>
          <input value={todoname} onChange={handleChange}/>
          <button>Save</button>
          <button >Cancel</button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
