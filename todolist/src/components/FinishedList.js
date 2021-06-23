import { useSelector } from "react-redux";
import TaskItem2 from "./MovieItem2";
import { useState } from "react";

const FinishedList = () => {
  const [query, setQuery] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const task = tasks
    .filter((task) => task.name.toLowerCase().includes(query.toLowerCase()))
    .map((task) => <TaskItem2 task={task} key={task.id} />);

  const filtered = tasks.filter((task) => task.status === true);

  return <div> finished {task}</div>;
};

export default FinishedList;
