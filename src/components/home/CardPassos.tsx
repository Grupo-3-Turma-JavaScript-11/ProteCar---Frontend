
interface Props{
    titulo: string,
    img: string,
    descricao: string,
    tipo: string
}
function CardPassos({titulo, img, descricao, tipo}: Props){
    return(
        <div className="bg-gray-100 rounded-2xl relative text-2xl font-semibold w-60 p-5 shadow-xl/30 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-200 mt-5"
>
            <div className="bg-blue-300 w-25 h-25 rounded-2xl absolute -top-10 justify-center items-center flex">
                <img src={img} alt="" />
            </div>
            <h2 className="mt-20">{titulo}<br />
            {tipo}
            </h2>
            <h3 className="font-normal text-gray-600 mt-5 text-xl">{descricao}</h3>
        </div>

    )
}
export default CardPassos