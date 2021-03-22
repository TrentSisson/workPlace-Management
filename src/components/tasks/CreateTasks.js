import React, { useContext, useEffect, useState, } from "react"
import { TasksContext } from "./TasksProvider.js"
import "./Tasks.css"
import { useHistory, useParams } from 'react-router-dom'
import { Multiselect, onSelect, onRemove } from 'multiselect-react-dropdown';
import { EmployeeContext } from "../employees/EmployeesProvider"



export const TasksForm = () => {
  const { addTasks, getTasks, addEmployeeTasks, tasks } = useContext(TasksContext)
  const { getEmployees, employees } = useContext(EmployeeContext)

  // this.state = {
  //   options: [{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }]
  // };
  // console.log(this.state)


  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [employeeTask, setEmployeeTask] = useState({
    employeeId: "",
    taskId: ""
  })

  const [task, setTask] = useState({
    title: "",
    description: "",
    managerId: parseInt(sessionStorage.getItem("managerId")),
    completed: false


  });



  const history = useHistory();

  useEffect(() => {
    getEmployees()
  }, [])
  // console.log(employees)
  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newTask = { ...task }
    const newEmployeeTask = { ...employeeTask }
    /* task is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newTask[event.target.id] = event.target.value
    newEmployeeTask[event.target.id] = event.target.value
    // update state
    setTask(newTask)
    setEmployeeTask(newEmployeeTask)
  }
  const handleClickSaveEmployeeTask = (res) => {
    // event.preventDefault()


    const newEmployeeTask = {
      employeeId: employeeTask.id,
      taskId: res.id
    }
    
      // .then(() => {
      //   const foundTask = tasks.find((title) => title == task.title)
      //   console.log(tasks)
        addEmployeeTasks(newEmployeeTask)
      

    // .then(() => history.push("/"))


  }
  // console.log(foundTask)
  // console.log(tasks)

  const handleClickSaveTask = (event) => {
    // event.preventDefault() //Prevents the browser from submitting the form



    //Invoke addTasks passing the new task object as an argument
    //Once complete, change the url and display the tasks list

    // const newEmployeeTask = {
    //   employeeId: 2,
    //   taskId: foundTask.id
    // }
    // let foundTask = 0

    const newTask = {
      title: task.title,
      description: task.description,
      managerId: task.managerId,
      completed: task.completed
      
    }
    addTasks(newTask)
    .then(res => handleClickSaveEmployeeTask(res))

    
  }

  // .then(() => history.push("/"))
  
  
  return (
    <form className="TaskForm">
      <h2 className="animalForm__title">New Task</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Task title:</label>
          <input type="text" id="title" required autoFocus className="form-control" placeholder="Task title" value={task.title} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Task description:</label>
          <input type="text" id="description" required autoFocus className="form-control" placeholder="Task description" value={task.description} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <Multiselect
        options={employees}
        displayValue="name"
        onClick = {e => {console.log(e.target.value)}}
      />

      {/* onSelect(selectedList, selectedItem) {
  ...
}

onRemove(selectedList, removedItem) {
  ...
} */}

      <button type="button" className="btn btn-primary" onClick={handleClickSaveTask}>
        Save Task
          </button>
    </form>
  )
}