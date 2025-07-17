import { useQueryClient } from "@tanstack/react-query";
import { fetchEmployee } from "@api/fetchEmployee";


export function usePrefetchEmployee() {
  const client = useQueryClient();
  
  return (id) => {
    client.prefetchQuery({
      queryKey: ['team', id],
      queryFn: async () => {
        return await fetchEmployee(id);
      }
    });
  }
}