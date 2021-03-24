import React from "react"
import { Route } from "react-router-dom"
import { TasksProvider } from "./tasks/TasksProvider.js"
import { TasksList } from "./tasks/TasksList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeesProvider.js"
import { TasksForm } from "./tasks/CreateTasks"
import { EmployeeForm } from "./employees/CreateEmployee.js"
import { TaskDetail } from "./tasks/TasksDetails.js"



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
                <Route exact path= "/createEmployee">
                    < EmployeeForm />
                </Route>
                <Route exact path= "/task/detail/:taskId(\d+)">
                    <TaskDetail />
                </Route>
                <Route exact path= "/task/edit/:taskId(\d+)">
                    <TasksForm/>
                </Route>
                
                </EmployeeProvider>
            </TasksProvider>

        </>
    )
}
