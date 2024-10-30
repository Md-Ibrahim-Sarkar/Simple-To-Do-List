import { useReducer } from "react"
import AddTask from "./Task/AddTask"
import TaskList from "./Task/TaskList"
import { initialTasks } from "./data/initialTasks"
import taskReducer from "./Reducer/taskReducer"




function App() {



  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const addHandler = (value) => {
    dispatch({
      type: 'task_add',
      text: value,
    });

  }

  const editHandler = (text) => {
    dispatch({
      type: 'task_edit',
      text: text,
    });

  }

  const deleteHandler = (taskId) => {
    dispatch({
      type: 'task_delete',
      id: taskId,
    });
  }

  return (
    <div className="h-screen flex items-center">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-[-60px]">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Simple To-Do List</h1>

        <AddTask onAddTask={addHandler} />

        <TaskList onDeleteTask={deleteHandler} onEditTask={editHandler} tasks={tasks} />


      </div>

    </div>
  )
}

export default App
