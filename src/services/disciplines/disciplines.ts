import { DisciplineType } from "../../types";
import { instace } from "../instace/instace";


export const getAllDisciplines = async (): Promise<DisciplineType[]> => {
  // desestruturação o objeto data da resposta
  // const { data } = await instace.get('/disciplinas');
  const response = await instace.get('/disciplinas');
  return response.data;
}

export const getDiscipline = async (id: string): Promise<DisciplineType> => {
  const response = await instace.get(`/disciplinas/${id}`);
  return response.data;
}