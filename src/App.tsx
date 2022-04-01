import { useState } from "react";

// interface task{
//   id: "string"
//   taskName: "string"

// }

function App(): JSX.Element {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [trashList, setTrashList] = useState<string[]>([]);

  const filteredTaskList = taskList.filter((task) => !trashList.includes(task));
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
      <ol>{taskListElements}</ol>
      <p>{trashList}</p>
    </>
  );
}

export default App;
