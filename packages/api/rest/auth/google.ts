import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstance } from "../../utils";
import type { User } from "../../gql/__generated__/graphql";
import { buildQueryString } from "../build-query-string";

interface GoogleAuthResponse {
  statusCode: number;
  data: {
    user: User;
    access_token: string;
    refresh_token: string;
  };
}

interface GoogleErrorResponse {
  statusCode: number;
  message: string;
}

export const useGoogleAuth = (params: {
  code: string;
}): UseQueryResult<GoogleAuthResponse, GoogleErrorResponse> => {
  return useQuery<GoogleAuthResponse, GoogleErrorResponse>({
    queryKey: ["google-auth", params.code],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get<GoogleAuthResponse>(
          buildQueryString("/auth/google/callback", params)
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
