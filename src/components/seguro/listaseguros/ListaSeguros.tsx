import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { buscar } from "../../../service/Service";
import type Produto from "../../../models/Produto";
import CardSeguro from "../cardseguro/CardSeguro";

function ListaSeguros() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [produtos, setProdutos] = useState<Produto[]>([])

    // const { usuario, handleLogout } = useContext(AuthContext)
    // const token = usuario.token

    // useEffect(() => {
    //     if (token === '') {
    //         alert('Você precisa estar logado!')
    //         navigate('/')
    //     }
    // }, [token])

    useEffect(() => {
        buscarProdutos()    
    }, [produtos.length])

    async function buscarProdutos() {
        try {

            setIsLoading(true)

            await buscar('/produtos', setProdutos,)
        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="w-full h-screen flex flex-col p-20 items-center ">
            <button className="bg-gradient-to-r from-blue-800 to-blue-400 mb-30 rounded-2xl text-3xl text-white font-semibold h-15 w-120 self-center hover:bg-blue-900" onClick={() => navigate('/cadastrarproduto')}>Cadastrar novo Produto</button>

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && produtos.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhum Produto foi encontrado!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                produtos.map((produto) => (
                                    <CardSeguro key={produto.id} produto={produto}/>
                                ))
                            }
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ListaSeguros;