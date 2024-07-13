import { instace } from "../instace/instace";
export interface CourseResponse {
  id: number;
  name: string;
  description: string;
  workload: string;
}

export const getCourses = async (): Promise<CourseResponse[]> => {
  // desestruturação o objeto data da resposta
  // const { data } = await instace.get('/disciplinas');
  const response = await instace.get('/disciplinas');
  return response.data;
}