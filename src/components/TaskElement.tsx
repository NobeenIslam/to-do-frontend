import { useState } from "react";
import { taskElementProps } from "./types";
import axios from "axios";

export function TaskElement(props: taskElementProps): JSX.Element {
  const [inputToEditTask, setInputToEditTask] = useState<string>("")
  const [isEditTaskSelected, setIsEditTaskSelected] = useState<boolean>(false)

  function handleClickEditTask() {
    setIsEditTaskSelected(true)
  }

  function handleSubmitEditTask() {
    setIsEditTaskSelected(false)
  }

  function decrementCounter(counter: number) {
    return counter - 1;
  }

  return (
    <section>
      <li>{props.task.taskName}</li>
      <button
        onClick={() => {
          axios.delete(props.baseUrl + `/tasks/${props.task.id}`);
          props.setTaskCounter(decrementCounter(props.taskCounter));
        }}
      >
        Delete Task
      </button>
      <button
        onClick={handleClickEditTask}
      >
        Edit Task
      </button>
      {isEditTaskSelected &&
        <>
          <input
            placeholder="Edit Task"
            value={inputToEditTask}
            onChange={(event) => setInputToEditTask(event.target.value)}
          >
          </input>
          <button
            onClick={handleSubmitEditTask}
          >
            Submit Edit
          </button>
        </>

      }
    </section>
  );
}
