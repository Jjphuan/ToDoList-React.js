import { useState } from "react";

function ToDo(){

    const [tasks,setTask] = useState([]);
    const [newTask,setNewTask] = useState("");
    const [modi,setModify] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            const updatedTask = [...tasks,newTask];
            setTask(updatedTask);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTask = tasks.filter((_,i) => i !== index)
        setTask(updateTask);
    }

    function moveUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
            setTask(updatedTask);
        }
    }

    function moveDown(index){
        if(index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]]
            setTask(updatedTask);
        }
    }

    return(
        <div className="wrapper">
            <h1 className="title">To-Do-List</h1>
            <div className="inputField">
                <input
                    className="input"
                    type="text"
                    placeholder="Enter a Task"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className="addBtn" onClick={addTask}>Add Task</button>
            </div>
            <ol className="listWrap">
                {tasks.map((task,index) =>
                    <li key={index} className="list">
                        <span className="taskText">{task}</span>
                        <div className="button">
                            <button className="deteleBtn" onClick={() => deleteTask(index)}>
                                <svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            </button>
                            <button className="upBtn" onClick={() => moveUp(index)}>
                                <svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                            </button>
                            <button className="downBtn" onClick={() => moveDown(index)}>
                                <svg className="Icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                            </button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDo