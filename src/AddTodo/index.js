import React from "react";
import './style.css'

const Todo = ({ todo, removeTodo }) => {
    return (
        <div className="todo">
            {todo}
            <button onClick={removeTodo} className='todoRemoveButton'>X</button>
        </div>
    )
}

export default Todo