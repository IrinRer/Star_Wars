import axios, { AxiosInstance } from 'axios';

export const api = (): AxiosInstance => {
    console.log(process.env.REACT_APP_BACKEND_URL)
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });
};
