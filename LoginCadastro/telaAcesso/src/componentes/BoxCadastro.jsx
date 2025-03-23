import { useState } from "react";

function BoxCadastro({ newCadastro }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  return (
    <div className=" w-md p-15 bg-slate-800 text-white shadow-xl flex flex-col gap-4 my-10">
      <h1 className="font-bold text-2xl underline mb-10">Cadastro</h1>
      <label htmlFor="nome">Nome</label>
      <input
        className="border-b-1 border-white-500 outline-none focus:border-black transition-all duration-300"
        type="text"
        name="nome"
        placeholder="Nome:"
        value={nome}
        onChange={() => setNome(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        className="border-b-1 border-white-500 outline-none focus:border-black transition-all duration-300"
        type="text"
        name="email"
        placeholder="Email:"
        value={email}
        onChange={() => setEmail(event.target.value)}
      />
      <label htmlFor="senha">Idade</label>
      <input
        className="border-b-1 border-white-500 outline-none focus:border-black transition-all duration-300 "
        type="number"
        name="idade"
        placeholder="Idade:"
        value={idade}
        onChange={() => setIdade(event.target.value)}
      />

      <button
        className="w-full p-2 bg-red-500 cursor-pointer hover:bg-green-200 hover:text-black transition-all duration-300"
        onClick={() => {
          if (!nome.trim() || !email.trim() || !idade.trim()) {
            alert("Preencha todos os campos");
            return;
          }
          return (
            newCadastro(nome, email, idade),
            setNome(""),
            setEmail(""),
            setIdade("")
          );
        }}
      >
        Cadastar
      </button>
    </div>
  );
}

export default BoxCadastro;
