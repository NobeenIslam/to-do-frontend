export interface task {
  id: string;
  taskName: string;
}

export interface taskElementProps {
  task: task;
  baseUrl: string;
  taskCounter: number;
  editCounter: number;
  setTaskCounter: (arg0: number) => void;
  setEditCounter: (arg0: number) => void;
}

export interface InputControlsProps {
  taskInput: string;
  baseUrl: string;
  taskCounter: number;
  setTaskInput: (arg0: string) => void;
  setTaskCounter: (arg0: number) => void;
}
