import "./App.css";
import AddTask from "./component/AddTask";
import EditTask from "./component/EditTask";
import TaskList from "./component/TaskList";

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask />
      <TaskList />
      <EditTask />
    </div>
  );
}

export default App;
