import { NavLink } from 'react-router-dom'
import { GiCoffeeCup } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { IoIosCafe } from "react-icons/io";
import Header from "./Header"
import Coffee from '../assets/coffee.png'

function Hero() {
    return (
        <>
            <Header />

            <div className="min-h-screen bg-[#FCF2E7] flex justify-between flex-row px-80 py-20">

                <div className="flex flex-col gap-3 w-180 pt-20">

                    <p className="bg-[#dbd1c6] w-65 text-center py-1 rounded-2xl font-mono text-[#462b0e]">
                        BEM-VINDO AO ROYAL COFFEE
                    </p>

                    <h1 className="mt-6 font-serif text-6xl font-bold text-[#4A2E22]">
                        Royal Coffee
                    </h1>

                    <p className="py-2 font-medium text-lg font-mono text-[#462b0e]">
                        O sabor da realeza em cada xícara
                    </p>

                    <p className="w-150 text-lg text-gray-600 leading-8">
                        Cafés especiais preparados com ingredientes selecionados e muito carinho.
                        Um ambiente pensado para você relaxar, conversar e aproveitar cada momento.
                    </p>

                    <NavLink
                        to="/Produtos"
                        className="mt-5 w-fit bg-[#5A3825] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6E472E] transition duration-300"
                    >
                        Conheça o Cardápio →
                    </NavLink>


                    <div className="flex gap-8 mt-8">

                        <div className="flex items-center gap-2">
                            <IoIosCafe className="text-[#8B5E3C] text-2xl" />

                            <p className="text-[#4A2E22] font-medium text-sm">
                                Cafés Especiais
                            </p>
                        </div>


                        <div className="flex items-center gap-2">
                            <GiCupcake className="text-[#8B5E3C] text-2xl" />

                            <p className="text-[#4A2E22] font-medium text-sm">
                                Doces Artesanais
                            </p>
                        </div>


                        <div className="flex items-center gap-2">
                            <GiCoffeeCup className="text-[#8B5E3C] text-2xl" />

                            <p className="text-[#4A2E22] font-medium text-sm">
                                Ambiente Aconchegante
                            </p>
                        </div>

                    </div>

                </div>


                <div>
                    <img 
                        src={Coffee} 
                        alt="Café Royal Coffee"
                        className="w-120 pt-20"
                    />
                </div>


            </div>
        </>
    )
}

export default Hero