import { InputControlsProps } from "./types";
import axios from "axios";

export function InputControls(props: InputControlsProps): JSX.Element {
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
          props.setTaskCounter(props.taskCounter + 1);
        }}
      >
        Create Task
      </button>
      <button
        onClick={() => {
          axios.delete(props.baseUrl + "/tasks");
          props.setTaskCounter(0);
        }}
      >
        Delete All
      </button>
    </section>
  );
}
