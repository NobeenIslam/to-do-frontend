import {useState} from "react"

interface task{
  id: "string"
  taskName: "string"

}

function App(): JSX.Element {
  const [taskList,setTaskList] = useState<string[]>([])
  const [taskInput,setTaskInput]=useState<string>("")

  return (
  <>

    <h1>Nobeen's TodoList</h1>
    <input 
      placeholder="Type to create task"
      value = {taskInput}
      onChange = {(event)=>{
        setTaskInput(event.target.value)
      }}
    >
    </input>
    <button
      onClick = {() => {
        setTaskList(prevtaskList => [...prevtaskList, taskInput])
      }}
    >Creat Task</button>
    <p>{taskList}</p>

  </>
  )
}

export default App;
