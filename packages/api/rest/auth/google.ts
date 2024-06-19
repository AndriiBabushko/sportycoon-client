import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils";

export const useGoogleAuth = () => {
  return useQuery<{}, {}, {}>({
    queryKey: ["google-auth"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/auth/google");
      return data;
    },
  });
};
