import { React, useContext, useEffect } from "react"
import { TasksContext } from "./TasksProvider.js"
import "./Tasks.css"
import { useHistory } from "react-router-dom"
import { TasksCard } from "./TasksCard.js"

export const TasksList = () => {
    const { tasks, getTasks } = useContext(TasksContext)


    useEffect(() => {
        console.log("high: useEffect - getTasks")
        getTasks()

    }, [])

    const history = useHistory()

    return (
        <>
        <h2>Tasks</h2>
        <div className="tasks">
      {console.log("TasksList: Render", tasks)}
      {
        tasks.map(task => {
          return <TasksCard key={task.id} task={task} />
        })
      }
    </div>
        </>
    )
}