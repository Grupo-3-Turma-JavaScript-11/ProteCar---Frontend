
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, TiktokLogoIcon, WhatsappLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"


function Footer() {


    return (
        <>
            <div className="flex justify-center bg-blue-950 text-white">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10 items-start pl-4">
                    <div>
                        <h2 className="font-semibold  text-xl mb-4">Sobre a ProteCar</h2>
                            <ul className="space-y-2 text-l text-gray-200 ">
                                <li className="hover:text-blue-400 hover:underline transition">Institucional</li>
                                <li className="hover:text-blue-400 hover:underline transition">Blog</li>
                                <li className="hover:text-blue-400 hover:underline transition">Trabalhe Conosco</li>
                                <li className="hover:text-blue-400 hover:underline transition">Mapa do site</li>
                            </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold  text-xl mb-4">Produtos</h2>
                            <ul className="space-y-2 text-l text-gray-200 ">
                                <li className="hover:text-blue-400 hover:underline transition">Seguro Premium</li>
                                <li className="hover:text-blue-400 hover:underline transition">Seguro Intermediario</li>
                                <li className="hover:text-blue-400 hover:underline transition">Seguro Basico</li>
                                <li className="hover:text-blue-400 hover:underline transition">Seguro Delta</li>
                            </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold  text-xl mb-4">Fale Conosco</h2>
                            <ul className="space-y-2 text-l text-gray-200 ">
                                <li className="hover:text-blue-400 hover:underline transition">Precisa de socorro ou assistência?</li>
                                <li className="hover:text-blue-400 hover:underline transition">Chat ProteCar</li>                                
                                <li className="hover:text-blue-400 hover:underline transition"> Canal de Ouvidoria</li>
                                <li>SAC: <span  className="hover:text-blue-400 hover:underline transition">0800 123 4567</span></li>
                            </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-xl mb-4">Redes sociais</h2>
                            <ul className="flex space-y-2 text-l text-gray-200 gap-3">

                                <WhatsappLogoIcon className="hover:text-blue-400 transition"size={26} weight='bold' />
                                <InstagramLogoIcon className="hover:text-blue-400 transition" size={26} weight='bold' />
                                <FacebookLogoIcon className="hover:text-blue-400 transition" size={26} weight='bold' />
                                <TiktokLogoIcon className="hover:text-blue-400 transition" size={26} weight='bold' />
                                <YoutubeLogoIcon className="hover:text-blue-400 transition" size={26} weight='bold' />
                                <LinkedinLogoIcon className="hover:text-blue-400 transition" size={26} weight='bold' />

                                {/*<li className="hover:text-blue-300 hover:underline transition">Institucional</li>
                                <li className="hover:text-blue-300 hover:underline transition">Blog</li>
                                <li className="hover:text-blue-300 hover:underline transition">Trabalhe Conosco</li>
                                <li className="hover:text-blue-300 hover:underline transition">Mapa do site</li>*/}

                            </ul>
                    </div>

                    {/*<p className='text-xl font-bold'>
                            RH Connect | Criado por Grupo 3 - 2026
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogoIcon className="hover:text-orange-400 transition" size={48} weight='bold' />
                        <InstagramLogoIcon className="hover:text-orange-400 transition" size={48} weight='bold' />
                        <FacebookLogoIcon className="hover:text-orange-400 transition" size={48} weight='bold' />
                    </div>*/}
                </div>
            </div>
        </>
    )
}

export default Footer;