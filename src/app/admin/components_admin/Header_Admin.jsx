import { BsStars } from 'react-icons/bs';

const Header_Admin = ({ name }) => {
  return (
    <header className="bg-white shadow-md h-[10vh]">
      <div className="px-10 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#40a99b] rounded-full flex items-center justify-center text-[23px] pl-[1px]">
            <BsStars />
          </div>
          <p className="text-xl font-bold text-gray-800">Panel Administrativo</p>
          <span className="text-gray-500 text-[16px]">{name}</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40a99b] focus:border-transparent"
            />
            <div className="absolute left-2 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#40a99b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">Mateo Elian</span>
              <img src="./usuario.jpg" alt="Avatar" className="h-9 w-9 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_Admin;
