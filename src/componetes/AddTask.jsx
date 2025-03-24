import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        value={title}
        onChange={() => setTitle(event.target.value)}
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        value={description}
        onChange={() => setDescription(event.target.value)}
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos");
          } else {
            return (
              onAddTaskSubmit(title, description),
              setTitle(""),
              setDescription("")
            );
          }
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
