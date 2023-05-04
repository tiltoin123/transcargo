import React from 'react';

export function Cadastro() {
  return (
    <div className="h-100% w-20% flex justify-center">
      <form className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ficha de Cadastro</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="nome">
            Nome
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nome"
            type="text"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            I.E.
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ie"
            type="text"
            placeholder="Digite digite sua inscrição estadual"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="senha">
            CNPJ
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cnpj"
            type="password"
            placeholder="Digite seu cnpj"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmarSenha">
            Confirmar Senha
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmarSenha"
            type="password"
            placeholder="Confirme sua senha"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
