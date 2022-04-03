import { useState, useEffect } from "react";
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
  const [taskList, setTaskList] = useState<task[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [postCounter,setPostCounter] = useState<number>(0)

  useEffect(() => {
    axios
      .get(baseUrl + "/tasks")
      .then((response) => {
        setTaskList(response.data)
      });
  }, [postCounter]);

  const taskListElements = taskList.map((task) => 
    <li key={task.id}>{task.taskName}</li>
  );

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
          axios.post(baseUrl + "/tasks", { taskName: taskInput, id: "" });
          setPostCounter(postCounter => postCounter+1)
        }}
      >
        Create Task
      </button>
      <h3>To do:</h3>
      <ol>{taskListElements}</ol>
    </>
  );
}

export default App;
