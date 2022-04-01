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
  const [completedList, setCompletedList] = useState<string[]>([]);
  const [trashList, setTrashList] = useState<string[]>([]);

  const filteredTaskList = taskList
    .filter((task) => !trashList.includes(task))
    .filter((task) => !completedList.includes(task));
  const taskListElements = filteredTaskList.map((task, index) => {
    return (
      <section key={index}>
        <li>{task}</li>
        <button
          onClick={() => {
            setTrashList((prevTrashList) => [...prevTrashList, task]);
          }}
        >
          Delete Task
        </button>
        <button
          onClick={() => {
            setCompletedList((prevCompleteList) => [...prevCompleteList, task]);
          }}
        >
          Complete Task
        </button>
      </section>
    );
  });

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
          //axios.get(baseUrl+"/").then((response) => response.json())
          fetch(baseUrl + "/")
            .then((response) => response.json())
            .then((jsonBody) => {
              console.log(jsonBody[1].taskName);
            });
          setTaskList((prevtaskList) => [...prevtaskList, taskInput]);
        }}
      >
        Create Task
      </button>
      <h3>To do:</h3>
      <ol> {taskListElements}</ol>
      <p>Trash: {trashList.join(", ")}</p>
      <p>Completed: {completedList.join(", ")}</p>
      <p>{baseUrl + "/tasks"}</p>
    </>
  );
}

export default App;
