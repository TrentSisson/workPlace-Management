import React, { useState, createContext } from "react"


export const EmployeeContext = createContext()

export const EmployeeProvider  = (props) => {
const [employees, setEmployees] = useState([])
const [employeeTask, setEmployeeTask] = useState([])

const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
    .then(res => res.json())
    .then(setEmployees)


}

const deleteEmployee = employeeId => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
        method: "DELETE",
    })
    .then(getEmployees)
}



const deleteEmployeeTask = employeeId => {
    return fetch(`http://localhost:8088/employeeTasks/${employeeId}`, {
        method: "DELETE",
    })
    .then(getEmployeeTask)
}

    const addEmployee = employeeObj => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(response => response.json())
    }



    const getEmployeeTask = () => {
        return fetch ("http://localhost:8088/employeeTasks?_expand=task&_expand=employee")
        .then(res => res.json())
    .then(setEmployeeTask)
    }




    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee, employeeTask, getEmployeeTask, deleteEmployeeTask, deleteEmployeeTask, deleteEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

