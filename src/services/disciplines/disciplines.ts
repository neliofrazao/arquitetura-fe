import api from '../instance';

export interface DisciplineResponse {
  id: number;
  name: string;
  courseWorkload: string;
  professor: string;
  status: string;
  description: string;
}

export const getDisciplines = async (): Promise<DisciplineResponse[]> => {
  const { data } = await api.get('/disciplinas');
  return data;
};

export const getDiscipline = async (id: string): Promise<DisciplineResponse> => {
  const { data } = await api.get(`/disciplinas/${id}`);
  return data;
};
