import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="bg-[#FCF2E7] border-b border-gray-200 shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto h-20 px-5 sm:px-8 lg:px-10 flex items-center justify-between">
                {/* LOGO */}
                <a href="#hero" className="flex items-center gap-2 sm:gap-3">
                    <img src={logo} alt="Royal Coffee" className="h-14 sm:h-16 lg:h-18 w-auto" />

                    <h1 className="text-2xl sm:text-3xl font-serif font-medium text-[#4A2E22]">
                        Royal Coffee
                    </h1>
                </a>

                {/* MENU DESKTOP */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-medium text-[#4A2E22]">
                    <a href="#hero" className="hover:text-[#8b5224] transition duration-300">
                        Home
                    </a>

                    <a href="#produtos" className="hover:text-[#8b5224] transition duration-300">
                        Cardápio
                    </a>

                    <a href="#beneficios" className="hover:text-[#8b5224] transition duration-300">
                        Benefícios
                    </a>

                    <a href="#depoimentos" className="hover:text-[#8b5224] transition duration-300">
                        Depoimentos
                    </a>
                </nav>

                {/* BOTÃO DESKTOP */}
                <a
                    href="#produtos"
                    className="
            hidden
            md:block
            bg-[#5A3825]
            text-white
            px-6
            lg:px-8
            py-3
            rounded-full
            hover:bg-[#24150c]
            transition
            duration-300
            whitespace-nowrap
          ">
                    Peça Agora
                </a>

                {/* BOTÃO MENU MOBILE */}
                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="lg:hidden text-[#4A2E22] text-3xl">
                    {menuAberto ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* MENU MOBILE */}
            {menuAberto && (
                <nav className="lg:hidden bg-[#FCF2E7] border-t border-gray-200 px-6 py-5">
                    <div className="flex flex-col items-center gap-5 font-medium text-[#4A2E22]">
                        <a
                            href="#hero"
                            onClick={() => setMenuAberto(false)}
                            className="hover:text-[#8b5224] transition">
                            Home
                        </a>

                        <a
                            href="#produtos"
                            onClick={() => setMenuAberto(false)}
                            className="hover:text-[#8b5224] transition">
                            Cardápio
                        </a>

                        <a
                            href="#beneficios"
                            onClick={() => setMenuAberto(false)}
                            className="hover:text-[#8b5224] transition">
                            Benefícios
                        </a>

                        <a
                            href="#depoimentos"
                            onClick={() => setMenuAberto(false)}
                            className="hover:text-[#8b5224] transition">
                            Depoimentos
                        </a>

                        <a
                            href="#produtos"
                            onClick={() => setMenuAberto(false)}
                            className="
                bg-[#5A3825]
                text-white
                px-7
                py-3
                rounded-full
                hover:bg-[#24150c]
                transition
              ">
                            Peça Agora
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;

