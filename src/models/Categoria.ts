import type Produto from "./Produto";

export default interface Categoria {
    id: number;
    descrcao: string;
    produto?: Produto[] | null;
}