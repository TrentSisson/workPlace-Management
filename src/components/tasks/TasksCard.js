import React from "react"
import "./Tasks.css"
import { Link } from "react-router-dom"

export const TasksCard = ({ task }) => {
    return(
        <section className="task">
      <h3 className="task__name">
        <Link to={`/task/detail/${task.id}`}>
          { task.title }
        </Link>
      </h3>
  </section>
)}
    
