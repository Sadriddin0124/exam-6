import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
export default function EditModal({visibility, toggle, tasks, defaults, index, index2, setEditVisible}) {
  const [newtask, setNewTask] = useState("");
  const [cathegory, setCathegory] = useState("");
  const handleTask = (e) => {
    setNewTask(e.target.value);
  };
  const editTask =(e)=> {
    e.preventDefault();
    let arr = cathegory.split(" ")
    tasks.forEach(element => {
      if(arr.includes(element.cathegory)) {
        element.title.push({name: newtask})
        console.log(tasks[index].title.splice(index2, 1));
      }
    });
    setEditVisible(false)
  }
  return (
    <Modal isOpen={visibility} toggle={toggle}>
      <ModalHeader>
        <h1>Edit</h1>
      </ModalHeader>
      <ModalBody>
      <form id="forms" onSubmit={editTask}>
          <input
            className="form-control my-3"
            id="input"
            onChange={handleTask}
            cols="1"
            defaultValue={defaults}
          />
          <select
            className="form-control"
            onChange={event => setCathegory(event.target.value)}
            defaultValue={tasks[index].cathegory}
          >
            <option value={null} hidden>Choose Cathegory</option>
            {tasks.map((item, index) => (
              <option value={item.cathegory}>{item.cathegory}</option>
            ))}
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
      <button id="save" form="forms" className="btn btn-primary">
          Save
        </button>
      </ModalFooter>
    </Modal>
  )
}
