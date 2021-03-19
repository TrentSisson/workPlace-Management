import React, { useContext } from "react"
import { TasksContext } from "./TasksProvider"
import "./Tasks.css"
import { Link } from "react-router-dom"

export const TasksCard = ({ task }) => {
  const { getTasks, addTasks, deleteTasks } = useContext(TasksContext)
  return (
    <section className="task">
      <button onClick={evt => { deleteTasks(task.id) }}>Delete Task</button>
      <h3 className="task__name">
        <Link to={`/task/detail/${task.id}`}>
          {task.title}
        </Link>
      </h3> 
      <fieldset>
        Completed
        <input type ="checkbox"></input>
      </fieldset>
    </section>
  )
}

