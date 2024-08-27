import axios from 'axios';
import React from 'react';
export const axiosSecure = axios.create({
  baseURL: 'https://bistro-boss-server-eta-nine-25.vercel.app',
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
