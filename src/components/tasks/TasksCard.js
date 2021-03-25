import React, { useContext } from "react"
import { TasksContext } from "./TasksProvider"
import "./Tasks.css"
import { Link } from "react-router-dom"
import { EmployeeContext } from "../employees/EmployeesProvider";

export const TasksCard = ({ task }) => {
  const { getTasks, addTasks, deleteTasks, completedTask } = useContext(TasksContext)
  const { getEmployees } = useContext(EmployeeContext)
  if (sessionStorage.getItem("managerId") == task.managerId) {
    const handleChange=(event) => {
      if (event.target.checked){
        completedTask(task.id, true)
      }else if (event.target.checked === false){
        completedTask(task.id, false)
      }
      }
      

    return (
      <section className="task">
        <button onClick={() => { deleteTasks(task.id) }}>Delete Task</button>
        <h3 className="task__name">
          <Link to={`/task/detail/${task.id}`}>
            {task.title}
          </Link>
        </h3>
        <fieldset>
          Completed<input name="boolean" type="checkbox" checked={task.completed} onChange={handleChange}/>
        </fieldset>
      </section>
    )
  } else return (null)
}

