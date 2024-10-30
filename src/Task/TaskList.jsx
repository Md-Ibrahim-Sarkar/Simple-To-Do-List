/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";


const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  return (
    <div className="">
      <ul className="space-y-3  overflow-scroll overflow-x-hidden h-[430px]">
        {
          tasks.map(item => <TaskItem key={item.id} onDeleteTask={onDeleteTask} onEditTask={onEditTask} tasks={item} />)
        }

      </ul>
    </div>
  );
};

export default TaskList;