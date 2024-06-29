import { instace } from "../instace/instace";

export const getCourses = async () => {
  const response = await instace.get('/disciplinas');
  return response.data;
}