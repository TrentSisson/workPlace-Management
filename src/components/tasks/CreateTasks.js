import React, { useContext, useEffect, useState } from  "react"
import { TasksContext } from "./TasksProvider.js"
import "./Tasks.css"
import { useHistory, useParams } from 'react-router-dom'


export const  TasksForm = () => {
    const { tasks, getTasks, addTasks } = useContext(TasksContext)




    const [task, setTasks] = useState({
        title: "",
        descriptipn: "",
        employeeId: 0
    });
    const [isLoading, setIsLoading] = useState(true);
    const { tasksId } = useParams();
    const history = useHistory();



    useEffect(() => {
        getTasks().then(() => {
            
        })
    })
}