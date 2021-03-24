import React, { useContext, useEffect, useState, } from "react"
import { TasksContext } from "./TasksProvider.js"
import "./Tasks.css"
import { useHistory, useParams } from 'react-router-dom'
import { Multiselect, onSelect, onRemove } from 'multiselect-react-dropdown';
import { EmployeeContext } from "../employees/EmployeesProvider"



export const TasksForm = () => {
  const { addTasks, getTasksById, addEmployeeTasks, tasks,updateTasks } = useContext(TasksContext)
  const { getEmployees, employees } = useContext(EmployeeContext)

  // this.state = {
  //   options: [{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }]
  // };
  // console.log(this.state)
const [selectedEmployees, setSelectedEmployees] = useState([])


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
    getEmployees().then(()=>{
      if(taskId){
        getTasksById(taskId)
        .then(task => {
          setTask(task)
        })
      }
    })
    // .then(employees.filter(e => e.managerId == (sessionStorage.getItem("managerId"))))
  }, [])
  const filteredEmployees = employees.filter(e => e.managerId == (sessionStorage.getItem("managerId")))
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
  
   


  
  const {taskId} = useParams();

  const handleClickSaveTask = (event) => {
    if(taskId){
      updateTasks({
        id:task.id,
        title:task.title,
        description:task.description,
        managerId: task.managerId,
        completed: task.completed
      })
      .then( history.push(`/task/detail/${taskId}`))
    }else{

      
      const newTask = {
        title: task.title,
        description: task.description,
        managerId: task.managerId,
        completed: task.completed
        
      }
      addTasks(newTask)
      .then(res => {
        console.log(res)
        const employeeTasks = selectedEmployees.map(employee => {
          const newEmployeeTask = {
            employeeId: employee.id,
            taskId: res.id
          }
          addEmployeeTasks(newEmployeeTask)
          return newEmployeeTask
        })
        console.log(employeeTasks)
        
        
      })
      .then( history.push("/"))
    }
  }
const handleMultiSelect = (selectedList,selectedItem ) => {
  const newSelectedEmployees = selectedEmployees.slice()
   newSelectedEmployees.push(selectedItem)
  setSelectedEmployees(newSelectedEmployees)

}
const handleMultiSelectRemove = (selectedList,removedItem ) => {
  const newSelectedEmployees = selectedEmployees.slice()
  const filteredEmployees = newSelectedEmployees.filter(employee => employee.id !== removedItem.id)
  
  setSelectedEmployees(filteredEmployees)

}
  if(taskId){

    return (
      <form className="TaskForm">
      <h2 className="animalForm__title">{taskId ? "Edit Task" : "Add Task"}</h2>
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
      <button type="button" className="btn btn-primary" onClick={handleClickSaveTask}>
        Save Task
          </button>
    </form>
  )
}else return(
    <form className="TaskForm">
    <h2 className="animalForm__title">{taskId ? "Edit Task" : "Add Task"}</h2>
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
      options={filteredEmployees}
      displayValue="name"
      onClick = {e => {console.log(e)}}
      onSelect={handleMultiSelect}
      onRemove={handleMultiSelectRemove}
      />

    <button type="button" className="btn btn-primary" onClick={handleClickSaveTask}>
      Save Task
        </button>
  </form>
)
}