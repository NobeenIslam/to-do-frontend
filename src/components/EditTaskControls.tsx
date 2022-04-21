import React from "react";

interface EditTaskControlsProps {
  inputToEditTask: string;
  setInputToEditTask: (arg0: string) => void;
  handleSubmitEditTask: () => void;
}

export default function EditTaskControls(
  props: EditTaskControlsProps
): JSX.Element {
  console.log("This is anew Render", Math.random());

  return (
    <>
      <input
        placeholder="Edit Task"
        value={props.inputToEditTask}
        onChange={(event) => {
          props.setInputToEditTask(event.target.value);
        }}
      ></input>
      <button onClick={props.handleSubmitEditTask}>Submit Edit</button>
    </>
  );
}
