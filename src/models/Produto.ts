import type Categoria from "./Categoria";

export default interface Produto {
    id: number;
    numeroAplice: string;
    anoCarro: string;
    valor: number;
    dataInicio: string;
    dataFim: string;
    categoria?: Categoria[] | null;
}