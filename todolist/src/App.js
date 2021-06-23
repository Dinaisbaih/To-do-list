import TaskList from "./components/TaskList";
// import Status from "./components/Status";
import { MainDiv, SubDiv } from "./styles";

function App() {
  return (
    <MainDiv>
      <SubDiv>
        <TaskList />
      </SubDiv>
      <SubDiv></SubDiv>
    </MainDiv>
  );
}

export default App;
