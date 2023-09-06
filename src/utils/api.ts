import axios from 'axios';

export type ApiResponseType = {
  sickCd: string;
  sickNm: string;
};

export const api = async (query: string) => {
  console.info('calling api');

  const response = await axios.get(`http://localhost:4000/sick?query=${query}`);
  return response.data;
};
