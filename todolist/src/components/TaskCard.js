import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, finishedTask } from "../store/actions";
import { CardDiv } from "../styles";

const TaskCard = (props) => {
  const dispatch = useDispatch("");
  const [done, setDone] = useState(props.task.status);

  const toggleStatus = () => {
    setDone(false);
    const statupdate = {
      ...props.task,
      ["status"]: !props.task.status,
    };
    dispatch(finishedTask(statupdate));
  };

  return (
    <CardDiv>
      {props.task.name}

      {props.task.status === false && props.task.deadLineDate >= props.today ? (
        <div>
          <button onClick={toggleStatus}>done</button>
        </div>
      ) : (
        <div />
      )}
      <div>
        <button onClick={() => props.dispatch(deleteTask(props.task.id))}>
          Delete
        </button>
        <br />
        <text
          style={{
            color: "grey",
          }}
        >
          DeadLine :{props.task.deadLineDate}
        </text>
      </div>
    </CardDiv>
  );
};

export default TaskCard;
