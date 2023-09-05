import axios from 'axios';

export const api = async (query: string) => {
  console.info('calling api');

  const response = await axios.get(`http://localhost:4000/sick?query=${query}`);
  return response.data;
};
