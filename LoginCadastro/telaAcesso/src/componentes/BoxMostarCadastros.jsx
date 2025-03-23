function BoxMostrarCadastro({ cadastro, deleteCadastro }) {
  return (
    <ul className="flex flex-col gap-4">
      {cadastro.map((cadastro) => (
        <li
          key={cadastro.id}
          className="max-h-max w-lx p-15 bg-slate-800 text-white shadow-xl flex flex-col justify-center items-center gap-4 my-10"
        >
          <p className="flex flex-col gap-2 ">
            <span>Nome: {cadastro.nome}</span>
            <span>Email: {cadastro.email}</span>
            <span>Idade: {cadastro.idade}</span>
          </p>
          <button
            onClick={() => deleteCadastro(cadastro.id)}
            className="ml-auto bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-all"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BoxMostrarCadastro;
