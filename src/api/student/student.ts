import api from '../instance';

export const getStudent = async () => {
  const { data } = await api.get('/58050060/json/');
  return data;
};
