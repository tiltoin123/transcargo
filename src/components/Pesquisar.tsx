import botaoPesquisar from '../assets/botaoPesquisar.svg';

export function Pesquisar() {

  return (
    <div className="bg-transparent flex justify-between items-center px-4 py-2">
      <div className="relative w-full mx-4 flex-1">
        <input type="text" className="w-full h-10 border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Rastreie sua encomenda" />
      </div>
      <button className="flex-none">
        <img src={botaoPesquisar} alt="logo" className="w-14 h-14" />
      </button>
    </div>
  );
}
