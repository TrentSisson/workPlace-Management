import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const TasksContext = createContext() 

// This component establishes what data can be used.
export const TasksProvider = (props) => {
    const [tasks, setTasks] = useState([])




const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
    .then(res => res.json())
    .then(setTasks)
}



const addTasks = tasksObj => {
    return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tasksObj)
    })
    .then(response => response.json())
    // .then(getTasks)
}

const deleteTasks = tasksId => {
    return fetch(`http://localhost:8088/tasks/${tasksId}`, {
        method: "DELETE",
    })
    .then(getTasks)


}
const addEmployeeTasks = employeeTasksObj => {
    return fetch("http://localhost:8088/employeeTasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeTasksObj)
    })
    .then(response => response.json())

}

   /*
        You return a context provider which has the
        `Tasks` state, `getTasks` function,
        and the `addTasks` function as keys. This
        allows any child elements to access them.
    */
        return (
            <TasksContext.Provider value={{
                tasks, getTasks, addTasks, deleteTasks, addEmployeeTasks
            }}>
                {props.children}
            </TasksContext.Provider>
        )
    }