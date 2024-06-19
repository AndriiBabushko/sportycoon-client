import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils";

export const useSpotifyAuth = () => {
  return useQuery<{}, {}, {}>({
    queryKey: ["spotify-auth"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/auth/spotify");
      return data;
    },
  });
};
