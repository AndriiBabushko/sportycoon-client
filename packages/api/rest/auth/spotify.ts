import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstance } from "../../utils";
import type { User } from "../../gql/__generated__/graphql";
import { buildQueryString } from "../build-query-string";

interface SpotifyAuthResponse {
  statusCode: number;
  data: {
    user: User;
    access_token: string;
    refresh_token: string;
  };
}

interface SpotifyErrorResponse {
  statusCode: number;
  message: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSpotifyAuth = (params: { code: string }) => {
  return useQuery<SpotifyAuthResponse, SpotifyErrorResponse>({
    queryKey: ["spotify-auth", params.code],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get<SpotifyAuthResponse>(
          buildQueryString("/auth/spotify/callback", params)
        );
        if (response.data.statusCode >= 400) {
          throw response;
        }

        return response.data;
      } catch (error: unknown) {
        if (error instanceof AxiosError)
          throw error.response?.data || new Error("Unknown Axios error");

        throw new Error("Unknown error");
      }
    },
    enabled: Boolean(params.code),
  });
};
