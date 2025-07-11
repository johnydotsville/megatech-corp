import { fetchEmployee } from "@api/fetchEmployee";
import { useQuery } from "@tanstack/react-query";


export function useEmployee(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["employee", id],
    queryFn: async () => {
      return await fetchEmployee(id);
    }
  });

  return {
    employee: data,
    employeeLoading: isLoading,
    employeeError: error
  }
}