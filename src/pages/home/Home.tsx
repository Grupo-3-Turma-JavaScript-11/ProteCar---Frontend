import { useEffect, useState } from "react"
import CardAvaliacao from "../../components/home/CardAvaliacao"
import CardPassos from "../../components/home/CardPassos"
import CardPlano from "../../components/home/CardPlano"
import type Categoria from "../../models/Categoria"
import { buscar } from "../../service/Service"


function Home(){
    const [categorias, setCategorias] = useState<Categoria[]>([])


    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])

    async function buscarCategorias() {
        try {

            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            if (error.toString().includes('401')) {
            alert('nao')
            }
        }
    }

    return(
        <>
        <section className="min-h-[60vh] flex items-center">
            <img src="/bannerHome.png" alt="Banner" className="w-full min-h-[60vh] absolute z-1 top-20"/>
            <div className="h-40 flex flex-col justify-between font-bold text-white text-5xl z-2 relative pl-20">
                <h2>Inicie um novo mês 
                <br /> 
                <span className="text-blue-300">com uma proteção nova</span></h2>
                <button className="bg-blue-300 hover:bg-blue-500 font-xl w-2/6 p-2 font-semibold text-sm">Faça sua cotação</button>
            </div>
        </section>
        <section className="pl-20 pr-20 w-full flex justify-center flex-col items-center relative">
            <div className="bg-blue-950 w-full md:w-2/3 grid md:grid-cols-2 grid-cols-1 gap-5 rounded-3xl p-5 items-center mt-70">
                <img src="/imgTipos.svg" alt="carro vermelho" className="transform transition duration-300 hover:scale-105 hover:shadow-2xl" />
                <div className="h-2/3 flex flex-col justify-between p-2 text-white w-2/3">
                    <h2 className="text-2xl font-bold">DO BÁSICO AO MAIS COMPLETO</h2>
                    <h3>Com coberturas básicas e adicionais, você garante a proteção ideal para o seu veículo, do seu jeito.</h3>
                    <button className="bg-blue-300 font-xl hover:bg-blue-600 text-sm md:w-2/6 w-3/6 p-2 rounded text-blue-950 font-semibold ">Cotar agora</button>
                    </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-30 md:pl-20 md:pr-20">
                <h2 className="text-blue-900 font-bold text-3xl mb-5">COBERTURAS QUE VOCÊ PODE CONTAR</h2>
                <div className="text-gray-700 font-medium text-xl flex flex-col gap-4">
                    <h3>✔️  Prejuízos gerados por alagamentos e enchentes, especialmente em locais de maior riscos a inundações</h3>
                    <h3>✔️  Danos causados por colisões, capotamentos e saídas de pista</h3>
                    <h3>✔️  Incêndio, explosão e quedas de raio</h3>
                    <h3>✔️  Roubo, furto e tentativa de arrombamento</h3>
                    <h3>✔️  Perda total ou parcial do veículo por acidentes</h3>
                    <h3>✔️  Danos causados por fenômenos da natureza (granizo, vendaval, deslizamentos)</h3>
                    <h3>✔️  Cobertura para terceiros (danos materiais e corporais, conforme o plano contratado)</h3>
                    <h3>✔️  Quebra de vidros, faróis, lanternas e retrovisores</h3>
                    <h3>✔️  Assistência 24h em caso de pane elétrica ou mecânica</h3>
                </div>
            </div>

            <div className="bg-gray-100 md:w-2/3 flex flex-col w-full justify-between items-center mt-40 rounded-2xl p-10 ">
                <h2 className="text-black text-4xl font-bold mt-10"><span className="text-blue-800">Planos</span> prontos para você</h2>
                <div className="flex mt-20 gap-5 flex-wrap justify-center mb-10">
                    {
                                categorias.map((categoria) => (
                                    <CardPlano key={categoria.id} categoria={categoria}/>
                                ))
                            }
            
                </div>

            </div>
            <div className="w-full mt-30 justify-center items-center flex flex-col mb-120">
                <h2 className="text-blue-950 font-bold text-3xl mb-40 self-start">CONTRATE ONLINE EM POUCOS PASSOS</h2>
                <div className="flex gap-15 flex-wrap justify-center">
                    <CardPassos tipo="Informações" titulo="Passo 1: " img="/text.png" descricao="Preencha seus dados e responda algumas perguntas"/>
                    <CardPassos tipo="Informações" titulo="Passo 2: " img="/pointer.png" descricao="Selecione o plano desejado"/>
                    <CardPassos tipo="Fechamento" titulo="Passo 3: " img="/verificado.png" descricao="Após a escolha do plano ideal, agendaremos o fechamento e a vistoria do seu veículo."/>
                </div>
            </div>
            <img src="/imgCar.svg" alt="carro azul" className="self-center -bottom-5 absolute transition-transform duration-500 ease-out hover:-translate-y-4"
/>
        </section>
        
        <section className="bg-blue-950 p-20 border-b border-gray-100">
            
            <h2 className="text-white font-bold text-3xl">QUEM JÁ CONTRATOU CONFIA</h2>
            <div className="w-full flex mt-20 gap-3 justify-center flex-wrap">
                
                <CardAvaliacao descricao="Contratei pelo preço, mas continuei pela qualidade do serviço. É bom saber que posso contar com um suporte eficiente quando mais preciso." autor="Ana A." lugar="Campinas - SP" />
                <CardAvaliacao descricao="Já tive experiências ruins com outras seguradoras, mas aqui foi diferente. Transparência, agilidade e um atendimento que realmente se importa com o cliente." autor="João C." lugar="Brasília - DF" />
                <CardAvaliacao descricao="Precisei acionar o seguro uma vez e fui surpreendido pela rapidez no atendimento. Em poucos minutos já tinham me orientado sobre todos os próximos passos. Me senti muito seguro e bem assistido." autor="Rodrigo M." lugar="Guarulhos - SP" />
                
            </div>
        </section>
        </>
    )
}
export default Home