import React, { useState } from 'react';
import Task from './Task';

const KanbanColumn = ({ column, onTaskMove }) => {
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText) {
            // Create a new task and set the updated tasks
            const newTask = { id: Date.now(), text: taskText };
            column.tasks = [...column.tasks, newTask]; // Create a new array
            setTaskText("");
        } else {
            alert('Please enter a task');
        }
    };

    const handleDrop = (e) => {
        const taskId = e.dataTransfer.getData("taskId");
        const fromColumnId = e.dataTransfer.getData("fromColumnId");

        if (fromColumnId !== column.id.toString()) {
            onTaskMove(Number(taskId), Number(fromColumnId), column.id);
        }
    };

    return (
        <div
            className='kanban-column'
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
        >
            <h3>{column.name}</h3>
            <div className='task-container'>
                {column.tasks.map((task) => (
                    <Task key={task.id} task={task} columnId={column.id} />
                ))}
            </div>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder='Enter task'
            />
            <button onClick={addTask}>ADD TASK</button>
        </div>
    );
};

export default KanbanColumn;
