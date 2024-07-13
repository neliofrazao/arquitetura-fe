import { instace } from "../instace/instace";
export interface StudentResponde {
  id: number;
  name: string;
  registration: string;
  course: string;
}

export const getStudent = async (): Promise<StudentResponde[]> => {
  const response = await instace.get('/alunos');
  return response.data;
}