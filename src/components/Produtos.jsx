import Cappuccino from "../assets/cappuccino.png";
import Latte from "../assets/latte.png";
import Mocha from "../assets/mocha.png";
import Brownie from "../assets/brownie.png";

function Produtos() {
  return (
    <section id="produtos" className="min-h-screen bg-[#FCF2E7] flex flex-col items-center px-20 py-20">

      {/* Título */}
      <div className="text-center">

        <p className="text-[#B3834D] text-xs font-medium tracking-widest">
          NOSSO CARDÁPIO
        </p>

        <h2 className="mt-4 font-serif text-4xl font-bold text-[#4A2E22]">
          Sabores que conquistam a cada xícara
        </h2>

        <p className="mt-5 text-sm text-[#6B625B]">
          Descubra nossas opções de cafés e doces preparados especialmente para você.
        </p>

      </div>


      {/* Produtos */}
      <div className="grid grid-cols-4 gap-6 mt-12 w-full max-w-6xl">

        {/* Cappuccino */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

          <img
            src={Cappuccino}
            alt="Cappuccino Royal"
            className="w-full h-[145px] object-cover"
          />

          <div className="p-5">

            <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
              Cappuccino Royal
            </h3>

            <p className="mt-2 text-sm text-[#6B625B] leading-5">
              Café espresso cremoso com leite vaporizado e uma delicada camada de espuma.
            </p>

            <div className="flex items-center justify-between mt-5">

              <span className="font-bold text-sm text-[#8B5E3C]">
                R$ 14,90
              </span>

              <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 hover:bg-[#6E472E] transition">
                Ver produto →
              </button>

            </div>

          </div>

        </div>


        {/* Latte */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

          <img
            src={Latte}
            alt="Latte Caramelo"
            className="w-full h-[145px] object-cover"
          />

          <div className="p-5">

            <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
              Latte Caramelo
            </h3>

            <p className="mt-2 text-sm text-[#6B625B] leading-5">
              Espresso suave combinado com leite cremoso e um toque especial de caramelo.
            </p>

            <div className="flex items-center justify-between mt-5">

              <span className="font-bold text-sm text-[#8B5E3C]">
                R$ 16,90
              </span>

              <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 hover:bg-[#6E472E] transition">
                Ver produto →
              </button>

            </div>

          </div>

        </div>


        {/* Mocha */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

          <img
            src={Mocha}
            alt="Mocha Especial"
            className="w-full h-[145px] object-cover"
          />

          <div className="p-5">

            <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
              Mocha Especial
            </h3>

            <p className="mt-2 text-sm text-[#6B625B] leading-5">
              Uma combinação irresistível de café, chocolate e leite cremoso.
            </p>

            <div className="flex items-center justify-between mt-5">

              <span className="font-bold text-sm text-[#8B5E3C]">
                R$ 17,90
              </span>

              <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 hover:bg-[#6E472E] transition">
                Ver produto →
              </button>

            </div>

          </div>

        </div>


        {/* Brownie */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

          <img
            src={Brownie}
            alt="Brownie Royal"
            className="w-full h-[145px] object-cover"
          />

          <div className="p-5">

            <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
              Brownie Royal
            </h3>

            <p className="mt-2 text-sm text-[#6B625B] leading-5">
              Brownie artesanal de chocolate, macio por dentro e servido com muito carinho.
            </p>

            <div className="flex items-center justify-between mt-5">

              <span className="font-bold text-sm text-[#8B5E3C]">
                R$ 12,90
              </span>

              <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 hover:bg-[#6E472E] transition">
                Ver produto →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Produtos;