import { FaStar } from 'react-icons/fa';

function Depoimentos() {
    return (
        <>

            <section
                id="depoimentos"
                className="min-h-[500px] bg-[#FCF2E7] px-5 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20
        ">

                <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
                    <p className="text-xs sm:text-sm font-medium tracking-widest text-[#B47A3C] uppercase">
                        QUEM JÁ CONHECE, AMA
                    </p>

                    <h2
                        className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#4A2E22]
            ">
                        Momentos que ficam na memória
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-[#5A3825]">
                        Confira o que nossos clientes dizem sobre a experiência na Royal Coffee.
                    </p>
                </div>


                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto
          ">

                    <div
                        className=" bg-white rounded-xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300
            ">
                        <img
                            src="https://i.pravatar.cc/100?img=47"
                            alt="Mariana Oliveira"
                            className="w-14 h-14 rounded-full object-cover mx-auto"
                        />


                        <div className="flex justify-center gap-1 mt-5 text-[#D3A15C]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p className="mt-4 text-sm italic leading-6 text-[#5A3825]">
                            "O café é maravilhoso e o ambiente é ainda melhor! É aquele lugar
                            perfeito para tomar um café com calma e esquecer um pouco da correria."
                        </p>

                        <h3 className="mt-6 font-serif font-bold text-[#4A2E22]">
                            Mariana Oliveira
                        </h3>

                        <p className="mt-1 text-[10px] font-medium tracking-wide text-[#8B5E3C]">
                            CLIENTE ROYAL COFFEE
                        </p>
                    </div>


                    <div
                        className=" bg-white rounded-xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300
            ">
                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            alt="Lucas Almeida"
                            className="w-14 h-14 rounded-full object-cover mx-auto"
                        />

                        <div className="flex justify-center gap-1 mt-5 text-[#D3A15C]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p className="mt-4 text-sm italic leading-6 text-[#5A3825]">
                            "Os cafés são deliciosos e os doces são incríveis. Dá para perceber o
                            cuidado em cada detalhe. Com certeza vou voltar!"
                        </p>

                        <h3 className="mt-6 font-serif font-bold text-[#4A2E22]">Lucas Almeida</h3>

                        <p className="mt-1 text-[10px] font-medium tracking-wide text-[#8B5E3C]">
                            CLIENTE ROYAL COFFEE
                        </p>
                    </div>

                    
                    <div
                        className=" bg-white rounded-xl p-5 sm:p-6 text-center shadow-sm  hover:shadow-md hover:-translate-y-1 transition duration-300
            ">
                        <img
                            src="https://i.pravatar.cc/100?img=32"
                            alt="Beatriz Santos"
                            className="w-14 h-14 rounded-full object-cover mx-auto"
                        />

                        <div className="flex justify-center gap-1 mt-5 text-[#D3A15C]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p className="mt-4 text-sm italic leading-6 text-[#5A3825]">
                            "Me apaixonei pelo lugar! O atendimento é ótimo, o ambiente é super
                            aconchegante e o Cappuccino Royal virou meu favorito."
                        </p>

                        <h3 className="mt-6 font-serif font-bold text-[#4A2E22]">Beatriz Santos</h3>

                        <p className="mt-1 text-[10px] font-medium tracking-wide text-[#8B5E3C]">
                            CLIENTE ROYAL COFFEE
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Depoimentos;
