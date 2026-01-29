import type Categoria from "./Categoria";

export default interface Produto {
    id: number;
    numeroApolice: string;
    anoCarro: string;
    valor: number;
    dataInicio: string;
    dataFim: string;
    categoria: Categoria | null;
}