import axios from "axios";

export const DELETE_TASK = "DELETE_TASK";
export const FINISHED_TASK = "FINISHED_TASK";
export const ADD_TASK = "ADD_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const finishedTask = (task) => {
  console.log(task);
  return async (dispatch) => {
    try {
      // task.status = !task.status;
      const res = await axios.put(
        `http://localhost:8000/tasks/${task.id}`,
        task
      );
      console.log(res.data, "omaaaar");
      dispatch({
        type: FINISHED_TASK,
        payload: { task: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/tasks", newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/tasks");
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
