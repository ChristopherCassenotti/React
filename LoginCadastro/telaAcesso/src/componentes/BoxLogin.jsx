function BoxLogin() {
  return (
    <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
      <div className=" w-md p-15 bg-slate-800 text-white shadow-xl flex flex-col gap-4">
        <h1 className="font-bold text-2xl underline mb-10">Login</h1>
        <label htmlFor="email">Email</label>
        <input
          className="border-b-1 border-white-500 outline-none focus:border-black transition-all duration-300"
          type="text"
          name="email"
          placeholder="Email:"
        />
        <label htmlFor="senha">Senha</label>
        <input
          className="border-b-1 border-white-500 outline-none focus:border-black transition-all duration-300 "
          type="password"
          name="senha"
          placeholder="Senha:"
        />
        <button className="w-full p-2 bg-red-500 cursor-pointer hover:bg-green-200 transition-all duration-300 hover:text-black transition-all duration-300">
          Login
        </button>
        <button className="text-sm cursor-pointer hover:text-red-500 transition-all duration-300">
          Esqueceu a Senha?
        </button>
        <button className="cursor-pointer text-sm hover:text-red-500 transition-all duration-300">
          Casdastre-se
        </button>
      </div>
    </div>
  );
}

export default BoxLogin;
