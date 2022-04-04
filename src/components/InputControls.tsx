import axios from "axios";

interface InputControlsProps {
  taskInput: string;
  baseUrl: string;
  postCounter: number;
  setTaskInput: (arg0: string) => void;
  setPostCounter: (arg0: number) => void;
}

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
          props.setPostCounter(incrementCounter(props.postCounter));
        }}
      >
        Create Task
      </button>
    </section>
  );
}