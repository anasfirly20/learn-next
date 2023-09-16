import useSWR from "swr";

export function useUser() {
  const { data, error, isLoading, mutate } = useSWR(
    `http://localhost:3000/api/users`
  );

  return {
    users: data,
    isLoading,
    isError: error,
    mutate,
  };
}
