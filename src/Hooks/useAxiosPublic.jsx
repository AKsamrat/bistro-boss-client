import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://bistro-boss-server-eta-nine-25.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
