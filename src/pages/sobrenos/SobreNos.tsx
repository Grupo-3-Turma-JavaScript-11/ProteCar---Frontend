

function SobreNos() {

    return (
        <main className="font-sans">
           {/* Texto Sobre */}
            <div className="px-8 grid md:grid-cols-2 gap-12 items-center h-screen bg-white">
                <div className="space-y-6 pl-12 ">
                    <h2 className="text-5xl font-bold text-slate-900 underline decoration-blue-400">Sobre Nós:</h2>
                    <p className="text-slate-600 text-xl leading-relaxed">
                        O ProteCar surgiu como uma iniciativa inovadora do Grupo 3 da Turma 11 de JavaScript. Diante de um cenário onde a segurança veicular muitas vezes é complexa e burocrática, nosso grupo decidiu unir o poder da tecnologia moderna à necessidade de proteção em tempo real. Através de um desenvolvimento colaborativo no GitHub, transformamos linhas de código em uma plataforma dedicada à gestão e monitoramento, focando sempre na experiência do usuário e na agilidade da informação.
                        <br /><br />
                        <span className="underline decoration-blue-400 font-bold">Nosso objetivo é claro:</span><br /> 
                        Oferecer uma solução que não apenas atenda às necessidades atuais dos proprietários de veículos, mas que também esteja preparada para evoluir com as demandas futuras do mercado. Com uma equipe apaixonada por tecnologia e inovação, estamos comprometidos em entregar um produto que faça a diferença na vida das pessoas, proporcionando segurança, praticidade e confiança.
                        <br /><br /> 
                        <span className="underline decoration-blue-400 font-bold">Visão:</span><br />
                        Ser a plataforma de referência em monitoramento veicular acessível, reconhecida pela excelência técnica no ecossistema JavaScript e pela capacidade de transformar dados complexos em segurança simplificada para todos os motoristas.    
                        Desenvolver soluções de software de alta performance que conectem proprietários aos seus veículos, oferecendo controle total, transparência e tranquilidade através de uma interface intuitiva e tecnologicamente avançada.
                        <br /><br />               
                        <span className="underline decoration-blue-400 font-bold">Valores:</span>  <br />
                        Nossos valores são os pilares que sustentam cada decisão de código e design que tomamos:
                        Inovação Constante: Buscamos sempre as melhores práticas de desenvolvimento (como React e ES6+) para entregar o que há de mais moderno.
                        Transparência: Acreditamos que o acesso à informação do veículo deve ser claro, direto e honesto.
                        Segurança de Dados: Tratamos as informações de nossos usuários com o rigor técnico que a privacidade digital exige.
                        Colaboração (Open Source Spirit): Valorizamos o trabalho em equipe e a troca de conhecimento que o ambiente de desenvolvimento nos proporciona.
                        <br /><br />
                        <span className="underline decoration-blue-400 font-bold">Foco no Usuário:</span> <br />
                        Cada botão e cada fluxo de tela é pensado para facilitar a vida de quem está atrás do volante.
                        <br /><br /> 
                    </p>
                </div>
                <div className="flex justify-center w-full h-3/4">
                    <img 
                        src="sobrenos.jpg" 
                        alt="imagem pagina Sobre Nós" 
                        className="max-w-full w-full drop-shadow-xl mix-blend-multiply pr-4"/>
                </div>
            </div>
        </main>
    )
}

export default SobreNos;