import { IoIosCafe } from 'react-icons/io';
import { GiCupcake } from 'react-icons/gi';
import { GiCoffeeCup } from 'react-icons/gi';

function Beneficios() {
    return (
        <section
            id="beneficios"
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
            {/* Título */}
            <div className="text-center max-w-2xl">
                <p className="text-[#8B5E3C] text-xs sm:text-sm font-medium tracking-widest">
                    POR QUE ESCOLHER A ROYAL COFFEE?
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
                    Feito para tornar seu momento ainda
                    <br className="hidden sm:block" />
                    mais especial
                </h2>

                <p
                    className="
            mt-5
            text-sm
            sm:text-base
            text-[#6B625B]
            px-2
          ">
                    Mais do que café, oferecemos uma experiência feita para você aproveitar cada
                    momento.
                </p>
            </div>

            {/* Cards */}
            <div
                className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          mt-10
          sm:mt-12
          w-full
          max-w-6xl
        ">
                {/* Card 1 */}
                <div
                    className="
            bg-white
            rounded-xl
            p-5
            sm:p-6
            shadow-sm
            hover:shadow-md
            hover:-translate-y-1
            transition
            duration-300
          ">
                    <div className="w-10 h-10 bg-[#EFE3D6] rounded-full flex items-center justify-center">
                        <IoIosCafe className="text-[#8B5E3C] text-xl" />
                    </div>

                    <h3 className="mt-5 font-serif text-xl text-[#4A2E22]">Cafés Especiais</h3>

                    <p className="mt-2 text-sm leading-5 text-[#6B625B]">
                        Grãos selecionados e preparados cuidadosamente para proporcionar uma
                        experiência única em cada xícara.
                    </p>
                </div>

                {/* Card 2 */}
                <div
                    className="
            bg-white
            rounded-xl
            p-5
            sm:p-6
            shadow-sm
            hover:shadow-md
            hover:-translate-y-1
            transition
            duration-300
          ">
                    <div className="w-10 h-10 bg-[#EFE3D6] rounded-full flex items-center justify-center">
                        <GiCupcake className="text-[#8B5E3C] text-xl" />
                    </div>

                    <h3 className="mt-5 font-serif text-xl text-[#4A2E22]">Doces Artesanais</h3>

                    <p className="mt-2 text-sm leading-5 text-[#6B625B]">
                        Doces preparados com carinho para combinar perfeitamente com seu café
                        favorito.
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    className="
            bg-white
            rounded-xl
            p-5
            sm:p-6
            shadow-sm
            hover:shadow-md
            hover:-translate-y-1
            transition
            duration-300
          ">
                    <div className="w-10 h-10 bg-[#EFE3D6] rounded-full flex items-center justify-center">
                        <GiCoffeeCup className="text-[#8B5E3C] text-xl" />
                    </div>

                    <h3 className="mt-5 font-serif text-xl text-[#4A2E22]">
                        Ambiente Aconchegante
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-[#6B625B]">
                        Um espaço confortável e acolhedor para conversar, relaxar, trabalhar ou
                        simplesmente aproveitar seu café.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Beneficios;
