import { GiCoffeeCup } from 'react-icons/gi';
import { GiCupcake } from 'react-icons/gi';
import { IoIosCafe } from 'react-icons/io';
import Coffee from '../assets/coffee.png';

function Hero() {
    return (
        <>
            <div
                id="hero"
                className="
          min-h-screen
          bg-[#FCF2E7]
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          lg:gap-16
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
          py-12
          sm:py-16
          lg:py-10
        ">
        
                <div
                    className="
            flex
            flex-col
            gap-3
            w-full
            sm:max-w-[600px]
            lg:w-[550px]
            text-center
            lg:text-left
            items-center
            lg:items-start
          ">
                    <p
                        className="
              bg-[#dbd1c6]
              w-fit
              px-5
              py-1
              rounded-2xl
              font-mono
              text-xs
              sm:text-sm
              text-[#462b0e]
            ">
                        BEM-VINDO AO ROYAL COFFEE
                    </p>

                    <h1
                        className="
              mt-4
              sm:mt-6
              font-serif
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-[#4A2E22]
            ">
                        Royal Coffee
                    </h1>

                    <p
                        className="
              py-2
              font-medium
              text-base
              sm:text-lg
              font-mono
              text-[#462b0e]
            ">
                        O sabor da realeza em cada xícara
                    </p>

                    <p
                        className="
              w-full
              max-w-[500px]
              text-base
              sm:text-lg
              text-gray-600
              leading-7
              sm:leading-8
            ">
                        Cafés especiais preparados com ingredientes selecionados e muito carinho. Um
                        ambiente pensado para você relaxar, conversar e aproveitar cada momento.
                    </p>


                    <div
                        className="
              flex
              flex-col
              sm:flex-row
              flex-wrap
              justify-center
              lg:justify-start
              gap-5
              sm:gap-6
              lg:gap-8
              mt-6
              sm:mt-8
            ">
                        <div className="flex items-center gap-2">
                            <IoIosCafe className="text-[#8B5E3C] text-2xl" />

                            <p className="text-[#4A2E22] font-medium text-sm">Cafés Especiais</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <GiCupcake className="text-[#8B5E3C] text-2xl" />

                            <p className="text-[#4A2E22] font-medium text-sm">Doces Artesanais</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <GiCoffeeCup className="text-[#8B5E3C] text-2xl" />

                            <p className="text-[#4A2E22] font-medium text-sm">
                                Ambiente Aconchegante
                            </p>
                        </div>
                    </div>
                </div>

                {/* Imagem */}
                <div
                    className="
            w-full
            lg:w-auto
            flex
            justify-center
            lg:justify-end
          ">
                    <img
                        src={Coffee}
                        alt="Café Royal Coffee"
                        className="
              w-[280px]
              h-[320px]
              sm:w-[330px]
              sm:h-[370px]
              md:w-[380px]
              md:h-[420px]
              lg:w-[400px]
              lg:h-[450px]
              xl:w-[430px]
              xl:h-[480px]
              object-cover
              rounded-3xl
              shadow-xl
            "
                    />
                </div>
            </div>
        </>
    );
}

export default Hero;
