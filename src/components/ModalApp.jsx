import React, { useRef, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function ModalApp({
  visibility,
  toggle,
  tasks,
  setVisibility,
  defaultValue,
}) {
  const [newtask, setNewTask] = useState("");
  const [cathegory, setCathegory] = useState("");
  const handleTask = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    let arr = cathegory.split(" ")
    tasks.forEach(element => {
      if(arr.includes(element.cathegory)) {
        element.title.push({name: newtask})
      }
    });
    setVisibility(false)
  };

  return (
    <Modal isOpen={visibility} toggle={toggle}>
      <ModalHeader>
        <h1 className="text-center">Add User</h1>
      </ModalHeader>
      <ModalBody>
        <form id="form" onSubmit={addNewTask}>
          <input
            className="form-control my-3"
            id="input"
            onChange={handleTask}
            cols="1"
            defaultValue={defaultValue}
            placeholder="title"
          />
          <select
            className="form-control"
            onChange={event => setCathegory(event.target.value)}
            // defaultValue={tasks[index].cathegory}
          >
            <option value={null} hidden>Choose Cathegory</option>
            {tasks.map((item, index) => (
              <option value={item.cathegory}>{item.cathegory}</option>
            ))}
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <button id="save" form="form" className="btn btn-primary">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
}
