
interface Props{
    descricao: string,
    autor: string,
    lugar: string
}
function CardAvaliacao({descricao, autor, lugar}: Props){
    return(
        <div className="bg-gray-100 rounded-2xl relative text-xl font-semibold w-90 p-5 transform transition duration-300 hover:scale-105 hover:shadow-2xl shadow-xl/20 hover:bg-gray-200">
            <img src="/aspas.png" alt="" />
            <h3 className="font-normal text-gray-700 mt-5">{descricao}</h3>
            <h2 className="mt-3 mb-3">{autor}</h2>
            <h3 className="text-gray-500">{lugar}</h3>
        </div>

    )
}
export default CardAvaliacao