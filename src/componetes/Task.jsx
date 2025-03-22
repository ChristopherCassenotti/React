import { ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Task({ task, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {task.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full hover:shadow ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:shadow"
          >
            <ChevronRight />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:shadow"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
