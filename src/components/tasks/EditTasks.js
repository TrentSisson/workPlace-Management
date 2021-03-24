// import React, { useContext, useEffect, useState } from "react"
// import { TasksContext } from "./tasks/TasksProvider"
// import { EmployeeContext } from "..employees/EmployeesProvider"
// import "./Tasks.css"
// import { useHistory, useParams } from 'react-router-dom';

// export const EmployeeForm = () => {
//     const { getEmployee } = useContext(EmployeeContext)
//     const { tasks, getTasks, updateTasks } = useContext(TasksContext)




//     return (
//         <form className="TaskForm">
//           <h2 className="animalForm__title">New Task</h2>
//           <fieldset>
//             <div className="form-group">
//               <label htmlFor="name">Task title:</label>
//               <input type="text" id="title" required autoFocus className="form-control" placeholder="Task title" value={task.title} onChange={handleControlledInputChange} />
//             </div>
//           </fieldset>
//           <fieldset>
//             <div className="form-group">
//               <label htmlFor="name">Task description:</label>
//               <input type="text" id="description" required autoFocus className="form-control" placeholder="Task description" value={task.description} onChange={handleControlledInputChange} />
//             </div>
//           </fieldset>
//           </form>
// )
// }