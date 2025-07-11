import { Stack, Box } from '@mui/material';
import { useTeam } from '@/src/hooks/useTeam';
import { EmployeeCard } from './EmployeeCard';
import { useSearchParams } from 'react-router-dom';


export function TeamPagination() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;

  const { team, teamLoading, teamError } = useTeam(page, limit);

  if (teamLoading) {
    return <Box>Информация о сотрудниках загружается...</Box>
  }

  if (teamError) {
    return <Box>Не удалось загрузить информацию о сотрудниках. Попробуйте позже.</Box>
  }

  return (
    <Stack spacing={3} alignItems='center'>
      { team.map(emp => <EmployeeCard key={emp.id} employee={emp} />) }
    </Stack>
  )
}