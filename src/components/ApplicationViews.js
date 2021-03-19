import React from "react"
import { Route } from "react-router-dom"
import { TasksProvider } from "./tasks/TasksProvider.js"
import { TasksList } from "./tasks/TasksList"



export const ApplicationViews = () => {
    return (
        <>

            <TasksProvider>
                <Route exact path="/">
                    <TasksList />
                </Route>
            </TasksProvider>

        </>
    )
}
