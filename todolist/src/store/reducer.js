import { ADD_TASK, DELETE_TASK, FINISHED_TASK } from "./actions";

const initialState = { tasks: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload.taskId;
        }),
      };

    case FINISHED_TASK:
      console.log(action.payload);
      let finishedTask = state.tasks.find(
        (task) => task.id === action.payload.taskId
      );
      console.log(finishedTask);

      if (finishedTask.status === true) {
        finishedTask.status = false;
      } else {
        finishedTask.status = true;
      }
      console.log(finishedTask);
      return {
        ...state,
        // movies: movies,
        tasks: state.tasks.map((task) =>
          task.id === finishedTask.id ? finishedTask : task
        ),
      };

    case ADD_TASK:
      let newTask = {
        name: action.payload.newTask,
        status: false,
      };
      // action.payload.newMovie.id = state.movies[state.movies.length - 1].id + 1;
      // action.payload.newMovie.watched = false;
      // console.log("reducer");
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    default:
      return state;
  }
};
export default reducer;
