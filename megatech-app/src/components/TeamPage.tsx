import { Stack, Box } from '@mui/material';
import { useTeam } from '@/src/hooks/useTeam';
import { useSearchParams } from 'react-router-dom';
import type { Employee } from '@src/types/Employee';
import { EmployeeList } from './EmployeeList';


export function TeamPage() {
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
      <EmployeeList employees={team} />
    </Stack>
  )
}