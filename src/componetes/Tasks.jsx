import { ChevronRight, TrashIcon } from 'lucide-react';

function Tasks({tasks, onTaskClick, onDeleteTaskClick}){
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{tasks.map((tasks) => (
            <li key={tasks.id} className="flex gap-2">
                <button 
                onClick={() => onTaskClick(tasks.id)} 
                className={`bg-slate-400 text-left text-white p-2 rounded-md w-full hover:shadow ${tasks.isCompleted && 'line-through'}`}
                >
                    {tasks.title}
                </button>
                <button className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:shadow">
                    <ChevronRight />
                </button>
                <button onClick={() => onDeleteTaskClick(tasks.id)} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:shadow">
                    <TrashIcon />
                </button>
            </li>
        ))}
        </ul>
    );
}

export default Tasks;