export const removerFilme = async (id: string)  => {
  const response = await fetch(`http://localhost:3000/filmes/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Erro ao remover o filme");
  }
  return response
};
