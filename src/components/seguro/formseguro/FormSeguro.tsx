import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";

function FormSeguro() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', })
    
    const [produto, setProduto] = useState<Produto>({ 
        id: 0, numeroApolice: '', anoCarro: '', valor: 0, dataInicio: '', dataFim: '',} as Produto)

    // const { usuario, handleLogout } = useContext(AuthContext)
    // const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                // headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                // headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                // headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                // handleLogout()
            }
        }
    }

    // useEffect(() => {
    //     if (token === '') {
    //         alert('Você precisa estar logado');
    //         navigate('/');
    //     }
    // }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        // Authorization: token,
                    },
                });

                alert('Produto atualizado com sucesso')

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    // handleLogout()
                } else {
                    alert('Erro ao atualizar o Produto')
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        // Authorization: token,
                    },
                })

                alert('Produto cadastrado com sucesso');

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    // handleLogout()
                } else {
                    alert('Erro ao cadastrar o Produto');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';


    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                 {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4"
                onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Apólice do produto</label>
                    <input
                        type="text"
                        placeholder="Apólice"
                        name="numeroApolice"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.numeroApolice}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Valor do Produto</label>
                    <input
                        type="number"
                        placeholder="Valor"
                        name="valor"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                         value={produto.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Ano Carro</label>
                    <input
                        type="text"
                        placeholder="Ano Carro"
                        name="anoCarro"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                         value={produto.anoCarro}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}                       
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Data de Início da Apólice</label>
                        <input
                            type="text"
                            placeholder="Data de Início da Apólice"
                            name="dataInicio"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                            value={produto.dataInicio}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Data de Vencimento da Apólice</label>
                        <input
                            type="text"
                            placeholder="Data de Vencimento da Apólice"
                            name="dataFim"
                            required
                            className="border-2 border-slate-700 rounded p-2"
                            value={produto.dataFim}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' 
                    onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                    <option value="" selected disabled>Selecione uma Categoria</option>
                    
                    {categorias.map((categoria) => (
                        <>
                            <option value={categoria.id} >{categoria.descricao}</option>
                        </>
                    ))}

                </select>
                </div>
                <button 
                    type='submit' 
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                               disabled={carregandoCategoria}
                >
                    { isLoading ? 
                            <ClipLoader
                                color="#ffffff" 
                                size={24}
                            /> : 
                           <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
            </form>
            </div>
    
    );
}

export default FormSeguro;