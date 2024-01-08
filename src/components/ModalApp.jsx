import React, { useRef, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function ModalApp({
  visibility,
  toggle,
  tasks,
  setTasks,
  setVisibility,
  index,
  index2,
  defaultValue,
}) {
  const [newtask, setNewTask] = useState("");
  const [cathegory, setCathegory] = useState("");
  // const [defaultValue, setDefaultValue] = useState('')
  const handleTask = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    let payload = {
      name: newtask,
    };
    console.log(cathegory);
    if(index2 == 0) {
      if (tasks.map(item => item.cathegory == cathegory)) {
        tasks[index].title.push(tasks[index].title[index2])
        console.log(tasks[index]);
      } 
      else if (tasks.map(item => item.cathegory === cathegory)) {
        tasks[index].title.map(item => item.name = newtask)
      } 
      else if (tasks.map(item => item.cathegory !== cathegory)) {
        return;
      }
    }
    else if(index2 == null){
      if (tasks.map(item => item.cathegory === cathegory)) {
        tasks[index].title.push({...payload})
      } else if (tasks.map(item => item.cathegory !== cathegory)) {
        return;
      }
    } 
    setTasks([...tasks]);
    setVisibility(false);
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
          />
          <select
            className="form-control"
            onChange={event => setCathegory(event.target.value)}
            
          >
            <option hidden>Choose Cathegory</option>
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
