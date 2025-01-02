import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SPORTYCOON_API_URL ||
    "https://sportycoon-server.onrender.com",
  withCredentials: true,
});

axiosInstance.interceptors.response.use((response) => {
  // console.log("RESPONSE: ", response);
  return response;
});
