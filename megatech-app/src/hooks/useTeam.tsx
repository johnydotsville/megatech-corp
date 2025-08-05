import { useQuery } from "@tanstack/react-query";
import { fetchTeam } from '@/src/api/fetchTeam';
import type { Employee } from "../types/Employee";


type UseTeamResult = {
  team: Employee[] | undefined;
  teamSize: number | undefined;
  teamLoading: boolean;
  teamError: Error | null;
}


export function useTeam(page: number = 1, limit: number = 10): UseTeamResult {
  const { data, isLoading, error } = useQuery({
    queryKey: ["team", { page, limit }],
    queryFn: async () => {
      return await fetchTeam(page, limit);
    }
  });

  return {
    team: data?.employees,
    teamSize: data?.pagination.totalEmployees,
    teamLoading: isLoading,
    teamError: error
  }
}