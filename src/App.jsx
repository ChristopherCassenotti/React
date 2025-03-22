import { useState } from "react";
import AddTask from "./componetes/AddTask";
import Tasks from "./componetes/Tasks";

function App() {
    const [tasks, setTasks] = useState([{
        id: 1,
        title: "Estudar programação",
        description: "Estudar programação para se tornar um dev full stack.",
        isCompleted: false
    },
    {
        id: 2,
        title: "Estudar inglês",
        description: "Estudar inglês para se tornar fluente.",
        isCompleted: false
    },
    {
        id: 3,
        title: "Estudar matemática",
        description: "Estudar matemática porque é a melhor matéria.",
        isCompleted: false
    },
    ]);

    function onTaskClick(tasksId){
        const newTasks = tasks.map((tasks) => {
            if(tasks.id === tasksId){
                return {...tasks, isCompleted: !tasks.isCompleted}
            }
            return tasks;
        })
        setTasks(newTasks);
    }

    function onDeleteTaskClick(tasksId){
        const deleteTasks = tasks.filter(tasks => tasksId !== tasks.id);
        setTasks(deleteTasks);
    }

    function onAddTaskSubmit (title, description) {
        const newTask = {
            id: tasks.length + 2,
            title,
            description,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciador de Tarefas
                </h1>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
            </div>
        </div>
    )
}

export default App;