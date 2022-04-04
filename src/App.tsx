import { useState, useEffect } from "react";
import axios from "axios";
import { InputControls } from "./components/InputControls";

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
  const [taskCounter, setTaskCounter] = useState<number>(0);

  useEffect(() => {
    axios.get(baseUrl + "/tasks").then((response) => {
      setTaskList(response.data);
    });
  }, [taskCounter]);

  const taskListElements = taskList.map((task) => (
    <section key={task.id}>
      <li>{task.taskName}</li>
      <button
        onClick={() => {
          axios.delete(baseUrl + `/tasks/${task.id}`);
          setTaskCounter((taskCounter) => taskCounter - 1);
        }}
      >
        Delete Task
      </button>
    </section>
  ));

  return (
    <>
      <h1>Nobeen's TodoList</h1>
      <InputControls
        taskInput={taskInput}
        baseUrl={baseUrl}
        taskCounter={taskCounter}
        setTaskInput={setTaskInput}
        setTaskCounter={setTaskCounter}
      />
      <h3>To do:</h3>
      <p>You have {taskCounter} tasks to do</p>
      <ol>{taskListElements}</ol>
    </>
  );
}

export default App;
