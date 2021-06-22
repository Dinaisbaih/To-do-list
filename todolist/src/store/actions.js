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

export const finishedTask = (status, taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/tasks/${taskId}`,
        status
      );
      dispatch({
        type: FINISHED_TASK,
        payload: { status, taskId },
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
        payload: { newTask },
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
