import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SpotifyAuthResponse {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSpotifyAuth = () => {
  return useQuery<
    NonNullable<unknown>,
    NonNullable<unknown>,
    NonNullable<unknown>
  >({
    queryKey: ["spotify-auth"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<SpotifyAuthResponse>(
        "/auth/spotify"
      );
      return data;
    },
  });
};
