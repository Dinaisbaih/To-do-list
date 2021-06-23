import react, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../store/actions";
import React from "react";
import Modal from "./Modal";
import TaskCard from "./TaskCard";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
console.log(today);

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks, "helloooo");
  const dispatch = useDispatch();

  let todayTasksList = tasks
    .filter((task) => task.deadLineDate === today && task.status === false)
    .map((task) => <TaskCard today={today} task={task} dispatch={dispatch} />);

  let futureTasksList = tasks
    .filter((task) => task.deadLineDate > today && task.status === false)
    .map((task) => <TaskCard today={today} task={task} dispatch={dispatch} />);

  let finishedTask = tasks
    .filter((task) => task.status === true)
    .map((task) => <TaskCard today={today} task={task} dispatch={dispatch} />);

  let unFinishedTask = tasks
    .filter((task) => task.status === false && task.deadLineDate < today)
    .map((task) => <TaskCard today={today} task={task} dispatch={dispatch} />);

  return (
    <section>
      <h1>To Do List</h1>

      <h1 style={{ color: "green" }}>Today </h1>
      <list>{todayTasksList}</list>
      <Modal />
      <h1 style={{ color: "red" }}>Future</h1>
      <list>{futureTasksList}</list>
      <h1 style={{ color: "black" }}>Finished Task</h1>
      <list>{finishedTask}</list>
      <h1 style={{ color: "black" }}>UnFinished Task</h1>
      <list>{unFinishedTask}</list>
    </section>
  );
};

export default TaskList;
