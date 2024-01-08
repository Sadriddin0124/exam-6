import React, { useState } from "react";
import ModalApp from "./ModalApp";
import EditModal from "./EditModal";

export default function Cards() {
  const [tasks, setTasks] = useState([
    { id: 1, cathegory: "open", title: [{ name: "task1" }] },
    { id: 2, cathegory: "pending", title: [{ name: "task2" }] },
    { id: 3, cathegory: "inproge", title: [{ name: "task3" }] },
    { id: 4, cathegory: "progress", title: [{ name: "task4" }] },
  ]);
  const [visibility, setVisibility] = useState(false);
  const [index, setIndex] = useState("");
  const [index2, setIndex2] = useState('')
  const [defaults, setDefault] = useState('')
  const [editVisible, setEditVisible] = useState(false)
  const addNewTask = (index) => {
    setVisibility(true);
    setIndex(index)
    setIndex2(null)
  };
  const edit_task =(index, index2)=> {
    setIndex(index)
    setIndex2(index2)
    setDefault(tasks[index].title[index2].name)
    setEditVisible(true)
  }
  const deleteTask =(index, index2)=> {
    tasks[index].title.splice(index2, 1)
    setTasks([...tasks])
  }
  return (
    <div className="container">
      <div className="row mt-5">
        {tasks.map((item, index) => {
          return (
            <div className="col-3 d-flex justify-content-center" key={index}>
              <div className="card m-2">
                <div className="card-header">
                  <h1 className="text-center">{item.cathegory}</h1>
                </div>
                <div className="card-body d-flex align-items-center flex-wrap">
                  {item.title.map((el, index2) => {
                    return (
                      <div className="d-flex my-2" key={index2}>
                        <h3 className="me-5">{el.name}</h3>
                        <button
                          className="btn btn-info"
                          onClick={()=>edit_task(index, index2)}
                        >
                          edit
                        </button>
                        <button className="btn btn-danger mx-2" onClick={()=>deleteTask(index, index2)}>delete</button>
                      </div>
                    );
                  })}
                </div>
                <div className="card-footer d-flex justify-content-center">
                  <button className="btn btn-success" onClick={()=>addNewTask(index)}>
                    Add Users
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="row">
          <EditModal
          visibility={editVisible}
          toggle={() => setEditVisible(false)}
          setEditVisible={setEditVisible}
          tasks={tasks}
            setTasks={setTasks}
            index={index}
            index2={index2}
            defaults={defaults}
            setDefault={setDefault}
          />
          <ModalApp
            visibility={visibility}
            toggle={() => setVisibility(false)}
            setVisibility={setVisibility}
            tasks={tasks}
            setTasks={setTasks}
            index={index}
            index2={index2}
            defaultValue={defaults}
            setDefault={setDefault}
          />
        </div>
      </div>
    </div>
  );
}
