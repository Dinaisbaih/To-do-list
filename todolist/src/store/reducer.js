import { ADD_TASK, DELETE_TASK, FETCH_TASKS, FINISHED_TASK } from "./actions";

const initialState = { tasks: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload.taskId;
        }),
      };

    case ADD_TASK:
      let newTask = action.payload.newTask;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case FINISHED_TASK:
      console.log(action.payload.task);
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.task.id ? action.payload.task : task
        ),
      };

    default:
      return state;
  }
};
export default reducer;
