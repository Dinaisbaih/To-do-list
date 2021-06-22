import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTask, finishedTask } from "../store/actions";

const Status = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks, "status");

  const [query, setQuery] = useState("");
  console.log("ss");
  const arr = tasks
    .filter((task) => task.status)
    .filter((task) => task.name.toLowerCase().includes(query.toLowerCase()))
    .map((task) => (
      <li>
        {task.name}
        <div>
          <button
            onClick={() => dispatch(finishedTask(task.status, task.id))}
            style={{ width: "75px", height: "20px", marginRight: "10px" }}
          >
            Done
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

  return (
    <>
      <section>
        <h1>Finished List</h1>

        {/* <input
          type="text"
          placeholder="Search for a movie"
          onChange={(event) => setQuery(event.target.value)}
        /> */}
        <p>{arr}</p>
      </section>
    </>
  );
};

export default Status;
