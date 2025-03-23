function BoxMostrarCadastro({ cadastros }) {
  return (
    <ul className="flex flex-col gap-4">
      {cadastros.map((cadastros) => (
        <li className="flex gap-2" key={cadastros.nome}>
          <p className="w-md p-6 bg-slate-800 text-white shadow-xl flex flex-col text-center">
            Nome: {cadastros.nome} <br />
            Email: {cadastros.email} <br />
            Idade: {cadastros.idade}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default BoxMostrarCadastro;
