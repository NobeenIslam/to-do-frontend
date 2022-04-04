import { InputControlsProps } from "./types";
import axios from "axios";



export function InputControls(props: InputControlsProps): JSX.Element {
  function incrementCounter(counter: number) {
    return counter + 1;
  }

  return (
    <section>
      <input
        placeholder="Type to create task"
        value={props.taskInput}
        onChange={(event) => {
          props.setTaskInput(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          axios.post(props.baseUrl + "/tasks", {
            taskName: props.taskInput,
            id: "",
          });
          props.setTaskCounter(incrementCounter(props.taskCounter));
        }}
      >
        Create Task
      </button>
    </section>
  );
}
