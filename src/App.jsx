import { useEffect, useState } from "react";
import AddTask from "./componetes/AddTask";
import Task from "./componetes/Task";
import { v4 } from "uuid";

function App() {
  const [task, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    //FAZ O REQUERIMENTO
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      //ARMAZENA O REQUERIMENTO
      const data = await response.json();

      //COLOCA NO STATE DA LISTA
      setTasks(data);
    };
    fetchTasks();
  }, []);

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
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...task, newTask]);
  }

  return (
    <div className="w-full min-h-screen bg-slate-500 flex justify-center p-6">
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
