import { useState } from "react";
import axios from "axios";

interface task {
  id: "string";
  taskName: "string";
}

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "your-project.herokuapp.com"
    : "http://localhost:4000";

function App(): JSX.Element {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");

  const filteredTaskList = taskList;
  const taskListElements = filteredTaskList.map((task, index) => <li key={index}>{task}</li>);

  return (
    <>
      <h1>Nobeen's TodoList</h1>
      <input
        placeholder="Type to create task"
        value={taskInput}
        onChange={(event) => {
          setTaskInput(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          axios.post(baseUrl + "/tasks", { taskName: taskInput });
          setTaskList((prevtaskList) => [...prevtaskList, taskInput]);
        }}
      >
        Create Task
      </button>
      <h3>To do:</h3>
      <ol> {taskListElements}</ol>
    </>
  );
}

export default App;
