import { GiCoffeeCup } from "react-icons/gi";
import { GiCupcake } from "react-icons/gi";
import { IoIosCafe } from "react-icons/io";
import Coffee from "../assets/coffee.png";

function Hero() {
  return (
    <>

     <div id= "hero" className="min-h-screen bg-[#FCF2E7] flex flex-row items-center justify-between px-20">

  {/* Texto */}
  <div className="flex flex-col gap-3 w-[550px]">

    <p className="bg-[#dbd1c6] w-65 text-center py-1 rounded-2xl font-mono text-[#462b0e]">
      BEM-VINDO AO ROYAL COFFEE
    </p>

    <h1 className="mt-6 font-serif text-6xl font-bold text-[#4A2E22]">
      Royal Coffee
    </h1>

    <p className="py-2 font-medium text-lg font-mono text-[#462b0e]">
      O sabor da realeza em cada xícara
    </p>

    <p className="w-[500px] text-lg text-gray-600 leading-8">
      Cafés especiais preparados com ingredientes selecionados e muito carinho.
      Um ambiente pensado para você relaxar, conversar e aproveitar cada momento.
    </p>

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

  {/* Imagem */}
  <div className="flex items-center">
    <img
      src={Coffee}
      alt="Café Royal Coffee"
      className="w-[430px] h-[480px] object-cover rounded-3xl shadow-xl"
    />
  </div>

</div>
    </>
  );
}

export default Hero;