import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // innerHeight: "5px",
    // outerHeight: "10px",
  },
};

const ModalComponent = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [newTask, setNewTask] = useState({
    name: "",
    status: false,
    deadLineDate: "",
    priority: "",
  });
  const [add, setAdd] = useState("");
  const history = useHistory();

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

  const resetInput = () => {
    setAdd({
      name: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTask.deadLineDate = startDate;
    console.log(newTask, "props");
    dispatch(addTask(newTask));
    resetInput();
    resetForm();
    closeModal();
  };
  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  };
  const resetForm = () => {
    setNewTask({ name: "", status: "", priority: "", deadLineDate: "" });
  };

  return (
    <div>
      <Modal
        onSubmit={handleSubmit}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add New Task</h2>

        <form onSubmit={handleSubmit}>
          <label>Task</label>
          <input
            type="text"
            placeholder="task"
            name="name"
            value={add.name}
            onChange={handleChange}
          />

          {/* <label>Status</label>
          <input
            type="text"
            placeholder="status"
            name="status"
            value={newTask.status}
            onChange={handleChange}
          /> */}
          <label>Priority</label>
          <input
            type="text"
            placeholder="High/Medium/Low"
            name="priority"
            value={newTask.priority}
            onChange={handleChange}
          />
          <label>Deadline Date</label>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <button type="submit">add task </button>
          <button onClick={closeModal}>close</button>
        </form>
      </Modal>
      <button onClick={openModal}>New Task</button>
    </div>
  );
};

export default ModalComponent;
