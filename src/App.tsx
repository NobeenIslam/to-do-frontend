import { useState } from "react";

// interface task{
//   id: "string"
//   taskName: "string"

// }

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
      <>
        <li key={index}>{task}</li>
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
      </>
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
          setTaskList((prevtaskList) => [...prevtaskList, taskInput]);
        }}
      >
        Create Task
      </button>
      <h3>To do:</h3>
      <ol> {taskListElements}</ol>
      <p>Trash: {trashList.join(", ")}</p>
      <p>Completed: {completedList.join(", ")}</p>
    </>
  );
}

export default App;
