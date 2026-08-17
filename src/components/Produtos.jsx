import Cappuccino from '../assets/cappuccino.png';
import Latte from '../assets/latte.png';
import Mocha from '../assets/mocha.png';
import Brownie from '../assets/brownie.png';

function Produtos() {
    return (
        <section
            id="produtos"
            className="
        min-h-screen
        bg-[#FCF2E7]
        flex
        flex-col
        items-center
        px-5
        sm:px-8
        md:px-12
        lg:px-20
        py-12
        sm:py-16
        lg:py-20
      ">
          
            <div className="text-center max-w-3xl">
                <p className="text-[#B3834D] text-xs sm:text-sm font-medium tracking-widest">
                    NOSSO CARDÁPIO
                </p>

                <h2
                    className="
            mt-4
            font-serif
            text-3xl
            sm:text-4xl
            font-bold
            text-[#4A2E22]
          ">
                    Sabores que conquistam a cada xícara
                </h2>

                <p className="mt-5 text-sm sm:text-base text-[#6B625B]">
                    Descubra nossas opções de cafés e doces preparados especialmente para você.
                </p>
            </div>


            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          sm:gap-6
          mt-10
          sm:mt-12
          w-full
          max-w-6xl
        ">

                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <img
                        src={Cappuccino}
                        alt="Cappuccino Royal"
                        className="w-full h-[180px] sm:h-[160px] lg:h-[145px] object-cover"
                    />

                    <div className="p-5">
                        <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
                            Cappuccino Royal
                        </h3>

                        <p className="mt-2 text-sm text-[#6B625B] leading-5">
                            Café espresso cremoso com leite vaporizado e uma delicada camada de
                            espuma.
                        </p>

                        <div className="flex items-center justify-between gap-3 mt-5">
                            <span className="font-bold text-sm text-[#8B5E3C]">R$ 14,90</span>

                            <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 rounded-lg hover:bg-[#6E472E] transition whitespace-nowrap">
                                Ver produto →
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <img
                        src={Latte}
                        alt="Latte Caramelo"
                        className="w-full h-[180px] sm:h-[160px] lg:h-[145px] object-cover"
                    />

                    <div className="p-5">
                        <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
                            Latte Caramelo
                        </h3>

                        <p className="mt-2 text-sm text-[#6B625B] leading-5">
                            Espresso suave combinado com leite cremoso e um toque especial de
                            caramelo.
                        </p>

                        <div className="flex items-center justify-between gap-3 mt-5">
                            <span className="font-bold text-sm text-[#8B5E3C]">R$ 16,90</span>

                            <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 rounded-lg hover:bg-[#6E472E] transition whitespace-nowrap">
                                Ver produto →
                            </button>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <img
                        src={Mocha}
                        alt="Mocha Especial"
                        className="w-full h-[180px] sm:h-[160px] lg:h-[145px] object-cover"
                    />

                    <div className="p-5">
                        <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
                            Mocha Especial
                        </h3>

                        <p className="mt-2 text-sm text-[#6B625B] leading-5">
                            Uma combinação irresistível de café, chocolate e leite cremoso.
                        </p>

                        <div className="flex items-center justify-between gap-3 mt-5">
                            <span className="font-bold text-sm text-[#8B5E3C]">R$ 17,90</span>

                            <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 rounded-lg hover:bg-[#6E472E] transition whitespace-nowrap">
                                Ver produto →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <img
                        src={Brownie}
                        alt="Brownie Royal"
                        className="w-full h-[180px] sm:h-[160px] lg:h-[145px] object-cover"
                    />

                    <div className="p-5">
                        <h3 className="font-serif text-lg font-bold text-[#4A2E22]">
                            Brownie Royal
                        </h3>

                        <p className="mt-2 text-sm text-[#6B625B] leading-5">
                            Brownie artesanal de chocolate, macio por dentro e servido com muito
                            carinho.
                        </p>

                        <div className="flex items-center justify-between gap-3 mt-5">
                            <span className="font-bold text-sm text-[#8B5E3C]">R$ 12,90</span>

                            <button className="bg-[#4A2E22] text-white text-xs font-medium px-4 py-3 rounded-lg hover:bg-[#6E472E] transition whitespace-nowrap">
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
