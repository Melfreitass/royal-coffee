import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#32170D] text-[#FCF2E7] py-14">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                <h2 className="font-serif text-3xl font-bold">Royal Coffee</h2>

                <p className="mt-2 text-sm">Momentos artesanais em cada xícara.</p>


                <div className="flex gap-5 mt-7">
                    <a href="#" className="text-[#D3A15C] text-xl hover:text-[#FCF2E7] transition">
                        <FaInstagram />
                    </a>

                    <a href="#" className="text-[#D3A15C] text-xl hover:text-[#FCF2E7] transition">
                        <FaFacebook />
                    </a>

                    <a href="#" className="text-[#D3A15C] text-xl hover:text-[#FCF2E7] transition">
                        <FaWhatsapp />
                    </a>
                </div>


                <div className="w-full max-w-md border-t border-[#5A3825] mt-10"></div>

               
                <p className="text-xs mt-10 text-[#FCF2E7]">
                    © 2026 Royal Coffee. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
