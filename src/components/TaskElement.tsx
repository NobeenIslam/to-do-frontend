import { useState } from "react";
import { taskElementProps } from "./types";
import EditTaskControls from "./EditTaskControls";
import axios from "axios";

export function TaskElement(props: taskElementProps): JSX.Element {
  const [inputToEditTask, setInputToEditTask] = useState<string>("");
  const [isEditTaskSelected, setIsEditTaskSelected] = useState<boolean>(false);

  function handleSubmitEditTask() {
    axios.patch(props.baseUrl + `/tasks/${props.task.id}`, {
      taskName: inputToEditTask,
    });
    setIsEditTaskSelected(false);
    props.setEditCounter(props.editCounter + 1);
  }

  return (
    <section>
      <li>{props.task.taskName}</li>
      <button
        onClick={() => {
          axios.delete(props.baseUrl + `/tasks/${props.task.id}`);
          props.setTaskCounter(props.taskCounter - 1);
        }}
      >
        Delete Task
      </button>
      <button
        onClick={() => {
          setIsEditTaskSelected(true);
        }}
      >
        Edit Task
      </button>
      {isEditTaskSelected && (
        <EditTaskControls
          inputToEditTask={inputToEditTask}
          setInputToEditTask={setInputToEditTask}
          handleSubmitEditTask={handleSubmitEditTask}
        />
      )}
    </section>
  );
}
