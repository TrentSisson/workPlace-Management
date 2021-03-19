import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()
    


    useEffect(() => {
        getEmployees()
    },[])

    return (
        <>
        
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
    </>
    )
}