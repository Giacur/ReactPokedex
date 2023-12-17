import menuIcon from '../assets/pokeball.png';

export default function NavBar(){
    return <nav className="bg-white/25 fixed top-0 w-full z-50 backdrop-blur-xl border-gray-200 dark:bg-gray-900 shadow-sm shadow-amber-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={menuIcon} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Pokedex</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="#" className="block py-2 px-3 " aria-current="page">Il tuo Pokedex di fiducia!</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
}