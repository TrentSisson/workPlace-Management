import React, {useContext, useEffect, useState } from "react"
import { TasksContext } from "./TasksProvider.js"
import "./Tasks.css"
import { useParams, useHistory} from "react-router-dom"
import { EmployeeContext } from "../employees/EmployeesProvider.js"

export const TaskDetail = () => {
    const {getTasksById,  } = useContext(TasksContext)
    const {getEmployeeTask, employeeTask} = useContext(EmployeeContext)

     const [tasks, setTasks] = useState({})

    const {taskId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", taskId)
        getTasksById(taskId)
        .then((response) => {
            setTasks(response)
        })
        
    
    }, [])

    useEffect(() => {
        getEmployeeTask()
    },[])
        
   console.log(employeeTask) 
    const employeeNames = employeeTask.filter(et => et.taskId == taskId)
    console.log(employeeNames)
    return(
        <section className="task">
            <h3 className="task__name"><b>Task Title: </b>{tasks.title}</h3>
            <h3 className="task__description"><b>Task Detail:</b> {tasks.description}</h3>
             <h3 className="task__employees">Employee Name {employeeNames.map(e => {
                 return(
                <section>
                    <div>{e.employee.name}</div>
                    {/* in the morning write the delete fetch 
                    in order for this button to work */} 
                   <div><button onclick={deleteEmployee(e.id)}>delete</button></div>
                </section>
                 
                 )
             })}</h3>
             <button onClick={() => {
                history.push(`/task/edit/${tasks.id}`)
            }}>Edit</button>

        </section>
        )
    }
    
