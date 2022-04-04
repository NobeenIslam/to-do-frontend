import { taskElementProps } from "./types";
import axios from "axios";

export function TaskElement(props: taskElementProps): JSX.Element {
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
    </section>
  );
}
