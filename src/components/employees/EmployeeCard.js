import React from "react"
import {useContext} from "react"
import "./Employee.css"
import {EmployeeContext} from "./EmployeesProvider.js"

export const EmployeeCard = ({ employee }) => {
const { deleteEmployee } = useContext(EmployeeContext)



  if(sessionStorage.getItem("managerId")== employee.managerId){
    return (
      <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <button onClick={() =>  deleteEmployee(employee.id) }>Delete Employee</button>
    </section>
  )}
  
  else return(null)
}