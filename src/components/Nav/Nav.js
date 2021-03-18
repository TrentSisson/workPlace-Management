import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/createEmployee">Create Employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createTask">Create Task</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/employeeList">Employee List</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">Task List</Link>
        </li>

      </ul>
    </nav>
  )
}