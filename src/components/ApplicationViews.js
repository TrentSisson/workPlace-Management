import React from "react"
import { Route } from "react-router-dom"
import { TasksProvider } from "./tasks/TasksProvider.js"
import { TasksList } from "./tasks/TasksList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeesProvider.js"



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
                </EmployeeProvider>
            </TasksProvider>

        </>
    )
}
