import { useState } from 'react'
import './App.css'

function App() {
  const [columns, setColumns] = useState([
    { id: 1, name: 'To Do', tasks: [] },
    { id: 2, name: 'In Progress', tasks: [] },
    { id: 3, name: 'Done', tasks: [] },
  ]);

  const addColumn = (name) => {
    const columnName = prompt('Enter Column Name : ');
    if (columnName) {
      setColumns([...columns, { id: Date.now(), name: columnName, tasks: [] }]);
    }
  };

  const handleTaskMove = (taskId, fromColumnId, toColumnId) => {
    const fromColumn = columns.find(column => column.id === fromColumnId);
    const toColumn = columns.find(column => column.id === toColumnId);
    const task = fromColumn.tasks.find(t => t.id === taskId);

    // Remove the task from the source column
    fromColumn.tasks = fromColumn.tasks.filter(t => t.id !== taskId);

    // Add the task to the destination column
    toColumn.tasks = [...toColumn.tasks, task];

    // update state
    setColumns([...columns]);

  }
  return (
    <>
    </>
  )
}

export default App
