import { useState, useEffect } from "react";
import "./App.css";
import BoxCadastro from "./componentes/BoxCadastro.jsx";
import BoxMostrarCadastro from "./componentes/BoxMostarCadastros.jsx";

function App() {
  const [cadastro, setCadastro] = useState(
    JSON.parse(localStorage.getItem("cadastro")) || []
  );

  function addCadastro(nome, email, idade) {
    const newCadastro = {
      id: cadastro.length + 1,
      nome,
      email,
      idade,
    };
    setCadastro([...cadastro, newCadastro]);
  }

  function deleteCadastro(cadastroId) {
    const deleteCadastro = cadastro.filter(
      (cadastro) => cadastroId !== cadastro.id
    );
    setCadastro(deleteCadastro);
  }

  useEffect(() => {
    localStorage.setItem("cadastro", JSON.stringify(cadastro));
  }, [cadastro]);

  return (
    <div className="min-h-screen w-full bg-slate-600 flex flex-col justify-center items-center gap-4">
      <BoxCadastro addCadastro={addCadastro} />
      <BoxMostrarCadastro cadastro={cadastro} deleteCadastro={deleteCadastro} />
    </div>
  );
}

export default App;
