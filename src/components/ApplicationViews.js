import React from "react"
import { Route } from "react-router-dom"
import { TasksProvider } from "./tasks/TasksProvider.js"
import { TasksList } from "./tasks/TasksList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeesProvider.js"
import { TasksForm } from "./tasks/CreateTasks"



export const ApplicationViews = () => {
    return (
        <>

            <TasksProvider>
                <EmployeeProvider>
                    
                <Route exact path="/">
                    <TasksList />
                </Route>
                <Route exact path="/employeeList">
                    < EmployeeList />
                </Route>
                <Route exact path= "/createTask">
                    < TasksForm />
                </Route>
                
                </EmployeeProvider>
            </TasksProvider>

        </>
    )
}
