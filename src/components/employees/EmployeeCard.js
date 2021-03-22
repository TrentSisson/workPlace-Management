import React from "react"
import "./Employee.css"



export const EmployeeCard = ({ employee }) => {
  if(sessionStorage.getItem("managerId")== employee.managerId){
    return (
      <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
    </section>
  )}
  else return(null)
}