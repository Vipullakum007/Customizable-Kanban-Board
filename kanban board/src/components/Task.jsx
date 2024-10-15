import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const Task = ({ task, columnId, onDelete }) => {

    const hadleDragStart = (e) => {
        e.dataTransfer.setData('taskId', task.id);
        e.dataTransfer.setData('fromColumnId', columnId);
    }

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <div className='task' draggable onDragStart={hadleDragStart}>
            {task.text}
            {/* <button onClick={handleDelete} className='btn btn-danger'>Delete</button> */}
            <FaTrashCan onClick={handleDelete} className='taskDeletebtn' />
        </div>
    )
}

export default Task