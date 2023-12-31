import React, { useState } from "react"
import * as socketIO from "socket.io-client";

const AddTask = ({socket}) => {
    const [task, setTask] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log({ task });
        setTask("");
    }

    return (
        <form className='form__input' onSubmit={handleAddTodo}>
            <label htmlFor='task'>Add Todo</label>
            <input
                type='text'
                name='task'
                id='task'
                value={task}
                className='input'
                required
                onChange={(e) => setTask(e.target.value)}
            />
            <button className='addTodoBtn'>ADD TODO</button>
        </form>
    )
}

export default AddTask;

export const Head = () => <title>Hello there</title>
