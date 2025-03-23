import { useEffect, useState } from "react";
import "./App.css";
import BoxCadastro from "./componentes/BoxCadastro.jsx";
import BoxMostrarCadastro from "./componentes/BoxMostarCadastros.jsx";

function App() {
  const [cadastros, setCadastros] = useState(
    JSON.parse(localStorage.getItem("cadastros")) || []
  );

  useEffect(() => {
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
  }, [cadastros]);

  function newCadastro(nome, email, idade) {
    const cadastro = {
      nome,
      email,
      idade,
    };
    setCadastros([...cadastros, cadastro]);
  }

  return (
    <div className="max-h-max w-full bg-slate-600 flex flex-col justify-center items-center gap-4">
      <BoxCadastro newCadastro={newCadastro} />
      <BoxMostrarCadastro cadastros={cadastros} />
    </div>
  );
}

export default App;
