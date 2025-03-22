import { useState } from "react";
import AddTask from "./componetes/AddTask";
import Task from "./componetes/Task";

function App() {
  const [task, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um dev full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática porque é a melhor matéria.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = task.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const deleteTasks = task.filter((task) => taskId !== task.id);
    setTasks(deleteTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: task.length + 2,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...task, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task
          task={task}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
