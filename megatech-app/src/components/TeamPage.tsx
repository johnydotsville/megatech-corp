import { Stack, Box } from '@mui/material';
import { useTeam } from '@/src/hooks/useTeam';
import { useSearchParams } from 'react-router-dom';
import { EmployeeList } from './EmployeeList';
import { PaginationBar } from './PaginationBar';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo, useCallback } from 'react';


export function TeamPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const navigate = useNavigate();
  const [currentEmployeeListPage, setCurrentEmployeeListPage] = useState<number>(1);

  const { team, teamSize, teamLoading, teamError } = useTeam(page, limit);

  if (teamLoading) {
    return <Box>Информация о сотрудниках загружается...</Box>
  }

  if (teamError) {
    return <Box>Не удалось загрузить информацию о сотрудниках. Попробуйте позже.</Box>
  }

  if (team === undefined) {
    return <Box>Нет информации о сотрудниках.</Box>
  }

  const handlePageSelect = useCallback((page: number) => {
    setCurrentEmployeeListPage(page);
    navigate(`?page=${page}&limit=${limit}`);
  }, [navigate, limit]);

  const totalPages = useMemo(() => Math.ceil((teamSize ?? 0) / limit), [teamSize, limit]);

  return (
    <Stack spacing={3} alignItems='center'>
      <EmployeeList employees={team} />
      <PaginationBar totalPages={totalPages} currentPage={currentEmployeeListPage} onPageSelect={handlePageSelect} />
    </Stack>
  )
}