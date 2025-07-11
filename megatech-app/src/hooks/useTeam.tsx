import { useQuery } from "@tanstack/react-query";
import { fetchTeam } from '@/src/api/fetchTeam';


export function useTeam(page = 1, limit = 10) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["team", { page, limit }],
    queryFn: async () => {
      return await fetchTeam(page, limit);
    }
  });

  return {
    team: data,
    teamLoading: isLoading,
    teamError: error
  }
}