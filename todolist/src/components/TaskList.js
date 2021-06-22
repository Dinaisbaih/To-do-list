import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, finishedTask } from "../store/actions";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

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

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks, "helloooo");
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [newTask, setNewTask] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  let List = tasks
    .filter((task) => !task.status)
    .filter((task) => task.name.toLowerCase().includes(query.toLowerCase()))
    .map((task) => (
      <li>
        {task.name}
        <div>
          <button
            onClick={() => dispatch(finishedTask(task.status, task.id))}
            style={{ width: "75px", height: "20px", marginRight: "10px" }}
          >
            done
          </button>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            style={{ width: "60px", height: "20px" }}
          >
            Delete
          </button>
        </div>
      </li>
    ));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(newTask));
  };
  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  return (
    <section>
      <h1>To Do List</h1>
      <ul>{List}</ul>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

        <form onSubmit={handleSubmit}>
          <label>Task</label>
          <input
            type="text"
            placeholder="task"
            name="name"
            value={newTask.name}
            onChange={handleChange}
          />
          <label>Status</label>
          <input
            type="text"
            placeholder="status"
            name="status"
            value={newTask.status}
            onChange={handleChange}
          />
          <label>Priority</label>
          <input
            type="text"
            placeholder="Priority"
            name="Priority"
            value={newTask.Priority}
            onChange={handleChange}
          />
          <label>Deadline Date</label>
          <input
            type="text"
            placeholder="Date"
            name="date"
            value={newTask}
            onChange={handleChange}
          />

          <button type="submit">add task </button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
    </section>
  );
};

export default TaskList;
