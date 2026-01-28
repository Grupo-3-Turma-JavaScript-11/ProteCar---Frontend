import CardAvaliacao from "../../componentes/home/CardAvaliacao"
import CardPassos from "../../componentes/home/CardPassos"
import CardPlano from "../../componentes/home/CardPlano"

function Home(){
    return(
        <>
        <section className="min-h-[60vh] flex items-center">
            <img src="/bannerHome.png" alt="Banner" className="w-full min-h-[60vh] absolute z-1 "/>
            <div className="h-40 flex flex-col justify-between font-bold text-white text-5xl z-2 relative pl-20">
                <h2>Inicie um novo mês 
                <br /> 
                <span className="text-blue-300">com uma proteção nova</span></h2>
                <button className="bg-blue-300 font-xl text-sm w-2/6 p-2 font-normal">Faça sua cotação</button>
            </div>
        </section>
        <section className="pl-20 pr-20 w-full flex justify-center flex-col items-center relative">
            <div className="bg-blue-950 w-full md:w-2/3 grid grid-cols-2 gap-5 rounded-3xl p-5 items-center mt-30">
                <img src="/imgTipos.svg" alt="carro vermelho" className="" />
                <div className="h-2/3 flex flex-col justify-between p-2 text-white w-2/3">
                    <h2 className="text-2xl font-bold">DO BÁSICO AO MAIS COMPLETO</h2>
                    <h3>Com coberturas básicas e adicionais, você garante a proteção ideal para o seu veículo, do seu jeito.</h3>
                    <button className="bg-blue-300 font-xl text-sm w-2/6 p-2 rounded text-blue-950 font-medium ">Cotar agora</button>
                    </div>
            </div>
            <div className="grid grid-cols-2 mt-30 md:pl-20 md:pr-20">
                <h2 className="text-blue-900 font-bold text-3xl">COBERTURAS QUE VOCÊ PODE CONTAR</h2>
                <div className="text-gray-700 font-medium text-xl flex flex-col gap-4">
                    <h3>✔️  Prejuízos gerados por alagamentos e enchentes, especialmente em locais de maior riscos a inundações</h3>
                    <h3>✔️  Prejuízos gerados por alagamentos e enchentes, especialmente em locais de maior riscos a inundações</h3>
                    <h3>✔️  Prejuízos gerados por alagamentos e enchentes, especialmente em locais de maior riscos a inundações</h3>
                    <h3>✔️  Prejuízos gerados por alagamentos e enchentes, especialmente em locais de maior riscos a inundações</h3>
                    <h3>✔️  Prejuízos gerados por alagamentos e enchentes, especialmente em locais de maior riscos a inundações</h3>
                </div>
            </div>

            <div className="bg-gray-200 md:w-2/3 flex flex-col w-full justify-between items-center mt-40 rounded-2xl p-10">
                <h2 className="text-black text-4xl font-bold"><span className="text-blue-800">Planos</span> prontos para você</h2>
                <div className="flex mt-20 gap-5 flex-wrap justify-center">
                    <CardPlano />
                    <CardPlano />
                    <CardPlano />
            
                </div>

            </div>
            <div className="w-full mt-30 justify-center items-center flex flex-col mb-120">
                <h2 className="text-blue-950 font-bold text-3xl mb-40 self-start">CONTRATE ONLINE EM POUCOS PASSOS</h2>
                <div className="flex gap-10">
                    <CardPassos tipo="Informações" titulo="Passo 1: " img="/text.png" descricao="Preencha seus dados e responda algumas perguntas"/>
                    <CardPassos tipo="Informações" titulo="Passo 2: " img="/pointer.png" descricao="Selecione o plano desejado"/>
                    <CardPassos tipo="Fechamento" titulo="Passo 3: " img="/verificado.png" descricao="Após a escolha do plano ideal, agendaremos o fechamento e a vistoria do seu veículo."/>
                </div>
            </div>
            <img src="/imgCar.svg" alt="carro azul" className="self-center -bottom-5 absolute"/>
        </section>
        
        <section className="bg-blue-950 p-20">
            
            <h2 className="text-white font-bold text-3xl">QUEM JÁ CONTRATOU CONFIA</h2>
            <div className="w-full flex mt-20 gap-3 justify-center">
                
                <CardAvaliacao descricao="A Equipe é muito prestativa, competente e sempre me auxilia nos momentos em que preciso tomar decisões importantes sobre proteção para o meu patrimônio e para minha família." autor="Ana A." lugar="Campinas - SP" />
                <CardAvaliacao descricao="A Equipe é muito prestativa, competente e sempre me auxilia nos momentos em que preciso tomar decisões importantes sobre proteção para o meu patrimônio e para minha família." autor="Ana A." lugar="Campinas - SP" />
                <CardAvaliacao descricao="A Equipe é muito prestativa, competente e sempre me auxilia nos momentos em que preciso tomar decisões importantes sobre proteção para o meu patrimônio e para minha família." autor="Ana A." lugar="Campinas - SP" />
                
            </div>
        </section>
        </>
    )
}
export default Home