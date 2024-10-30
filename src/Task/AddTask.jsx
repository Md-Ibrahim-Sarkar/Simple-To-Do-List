import { useState } from "react";


const AddTask = ({ onAddTask }) => {

  const [text, setText] = useState('')




  return (

    <div className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          e.preventDefault(),
            setText(e.target.value)
        }}
        placeholder="Add task"
        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button onClick={() => { onAddTask(text), setText('') }}
        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>



  )
};

export default AddTask;
