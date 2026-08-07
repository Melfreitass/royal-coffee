import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="bg-[#FCF2E7] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">

        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Royal Coffee" className="h-20 w-auto" />
          <h1 className="text-3xl font-serif font-medium text-[#4A2E22] ">
            Royal Coffee
          </h1>
        </a>

        <nav className="flex items-center gap-12 font-medium text-[#4A2E22] ">
          <a href="#hero" className="hover:text-[#8b5224] transition">Home</a>
          <a href="#cardapio" className="hover:text-[#8b5224] transition">Cardápio</a>
          <a href="#sobre" className="hover:text-[#8b5224] transition">Sobre Nós</a>
          <a href="#depoimento" className="hover:text-[#8b5224] transition">Depoimentos</a>
        </nav>

        <div  
          className="bg-[#5A3825] text-white px-8 py-3 rounded-full hover:bg-[#24150c] transition"
        >
          Peça Agora
        </div>

      </div>
    </header>
  );
}

export default Header;