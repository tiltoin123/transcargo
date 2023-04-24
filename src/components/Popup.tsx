export function Popup() {


  return (
  <div className="w-screen h-screen  flex justify-center items-center">
    <div className="bg-purple-300 rounded-lg shadow-lg p-8">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
        Usuário
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Insira seu usuário:"
      />
      </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        Senha
      </label>
      <input
        className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Insira sua senha:"
      />
    </div>
    <div className="flex justify-end">
    <p>Esqueceu sua senha?</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
    </div>
    </div>
  </div>

  );
}
