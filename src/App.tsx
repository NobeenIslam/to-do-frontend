import { useState, useEffect } from "react";
import axios from "axios";
import { InputControls } from "./components/InputControls";
import { TaskElement } from "./components/TaskElement";
import { task } from "./components/types";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://todolistnobeen.herokuapp.com"
    : "http://localhost:4000";

function App(): JSX.Element {
  const [taskList, setTaskList] = useState<task[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [taskCounter, setTaskCounter] = useState<number>(0);
  const [editCounter, setEditCounter] = useState<number>(0)

  useEffect(() => {
    axios.get(baseUrl + "/tasks").then((response) => {
      setTaskList(response.data);
      setTaskCounter(response.data.length);
    });
  }, [taskCounter, editCounter]);

  const taskElements = taskList.map((task) => (
    <TaskElement
      key={task.id}
      task={task}
      baseUrl={baseUrl}
      taskCounter={taskCounter}
      editCounter={editCounter}
      setTaskCounter={setTaskCounter}
      setEditCounter={setEditCounter}
    />
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
      <ol>{taskElements}</ol>
      <p>Our back-end server is: {baseUrl}</p>
    </>
  );
}

export default App;
