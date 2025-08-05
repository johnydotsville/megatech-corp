import { useQueries } from '@tanstack/react-query';
import { fetchEmployee } from "@api/fetchEmployee";
import { fetchFeedbacksByEmployeeId } from '@api/fetchFeedbacksByEmployeeId';


export function useEmployeeBioAndFeedbacks(id) {
  const results = useQueries({
    queries: [
      {
        queryKey: ['employee', id],
        queryFn: async () => {
          return await fetchEmployee(id);
        }
      },
      {
        queryKey: ['feedbacks', id],
        queryFn: async () => {
          return await fetchFeedbacksByEmployeeId(id);
        }
      },
    ],
  });

  const [employeeQuery, reviewsQuery] = results;

  return {
    employeeBio: employeeQuery.data,
    employeeBioLoading: employeeQuery.isLoading,
    employeeBioError: employeeQuery.error,
    feedbacks: reviewsQuery.data,
    feedbacksLoading: reviewsQuery.isLoading,
    feedbacksError: reviewsQuery.error
  }
}