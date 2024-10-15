import React from 'react'

const Task = ({task , columnId}) => {

    const hadleDragStart = (e) => {
        e.dataTransfer.setData('taskId', task.id);
        e.dataTransfer.setData('fromColumnId', columnId);
    }

    return (
        <div className='task' draggable onDragStart={hadleDragStart}>
            {task.text}
        </div>
    )
}

export default Task