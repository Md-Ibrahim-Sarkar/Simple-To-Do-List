/* eslint-disable react/prop-types */
import { useState } from "react";


const TaskItem = ({ tasks, onEditTask, onDeleteTask }) => {

  const [onEditing, setOnEditing] = useState(false)
  const [text, setText] = useState(tasks.text)

  let onEditContent;

  if (onEditing) {
    onEditContent = (
      <>
        <input
          type="checkbox"
          className="mr-3 h-5 w-5 text-blue-600 rounded focus:ring-0 "
        />
        <input value={text} onChange={(e) => setText(e.target.value)} className="text-gray-800 py-2 px-1 focus:outline-none rounded me-2" type="text" />
        <button onClick={() => { setOnEditing(false), onEditTask({ ...tasks, text: text }) }} className="text-sm px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">save</button>

      </>
    )
  } else {
    onEditContent = (
      <>
        <input
          type="checkbox"
          className="mr-3 h-5 w-5 text-blue-600 rounded focus:ring-0 "
        />
        <input className="text-gray-800 py-2 px-1 focus:outline-none rounded me-2" value={tasks.text} type="text" />

        <button onClick={() => setOnEditing(true)} className="text-sm px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">Edit</button>

      </>
    )
  }





  return (
    <li className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        {onEditContent}
      </div>
      <button onClick={() => onDeleteTask(tasks.id)} className=" ms-2 text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>

    </li>

  );
};

export default TaskItem;