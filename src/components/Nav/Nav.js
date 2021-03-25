import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {useHistory} from "react-router-dom"
export const NavBar = (props) => {
  const history = useHistory()
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
       
      <ul className="nav nav-pills nav-fill">
        <button type="button"
          onClick={() => {
            (sessionStorage.clear())
             history.push("/login")
          }
          }>LogOut
                    </button>

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