import React from 'react'

const Task = ({task , columnId}) => {

    const hadleDragStart = (e) => {
        e.dataTransfer.setData('taskId', task.id);
        e.dataTransfer.setData('fromColumnId', columnId);
    }

    return (
        <div className='task' draggable onDragStart={hadleDragStart}>
            <h2>Task</h2>
            <p>This is a sample task.</p>
        </div>
    )
}

export default Task