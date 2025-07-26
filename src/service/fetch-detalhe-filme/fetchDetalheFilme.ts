import type { Filme } from "../../shared/types";

interface FilmeDetalhes extends Filme {
  sinopse: string;
}

export const fetchDetalheFilme = async (id: string): Promise<FilmeDetalhes> => {
  const response = await fetch(`http://localhost:3000/filmes/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar detalhes do filme");
  }
  return response.json();
} 