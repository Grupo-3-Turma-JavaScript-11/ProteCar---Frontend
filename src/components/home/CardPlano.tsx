import type Categoria from "../../models/Categoria"

interface Props{
    categoria: Categoria
}
function CardPlano({categoria}: Props){
    return(
        <div className="bg-blue-950 min-w-80 min-h-100 rounded-3xl mb-10 p-5 flex flex-col justify-center items-center z-1 relative transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-xl/20">
            <img src="/imgCategoria.svg" alt="Imagem carro" className="w-40 h-40 absolute -top-20" />
            <h2 className="text-blue-950 -mt-7 bg-blue-300 pl-7 pr-7 rounded-4xl font-semibold text-2xl">{categoria.descricao}</h2>
            <div className="text-white text-xl -ml-5 mt-5">
                <h3>✔️  Guincho</h3>
                <h3>✔️  Roubo e Furto</h3>
                <h3>✔️  Sinistros</h3>
                <h3>✔️  Assistência 24</h3>
                <h3>✔️  Rastreio</h3>

                <h2 className="text-white font-bold text-4xl items-start justify-center mt-5 flex"><span className="text-xl font-normal mt-1">R$</span>59<span className="text-xl font-bold mt-1">,90</span><span className="text-xl font-normal mt-1">/mês</span> </h2>
            </div>

        </div>

    )
}
export default CardPlano