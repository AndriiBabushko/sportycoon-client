import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../utils";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GoogleAuthResponse {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useGoogleAuth = () => {
  return useQuery<
    NonNullable<unknown>,
    NonNullable<unknown>,
    NonNullable<unknown>
  >({
    queryKey: ["google-auth"],
    queryFn: async () => {
      const { data } =
        await axiosInstance.get<GoogleAuthResponse>("/auth/google");
      return data;
    },
  });
};
