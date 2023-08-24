import { useState } from "react"

function ToDoHead ({toDoItem, handleChange,handleClick}) {


    return (
        <div>
            <h3>Add ToDo</h3>
            <input type='text' onChange={handleChange} value={toDoItem}/>
            <button onClick={handleClick}>Submit</button>
        </div>

      );
}

export default ToDoHead ;