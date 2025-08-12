import { Stack, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { usePrefetchEmployee } from '../hooks/usePrefetchEmployee';
import type { Employee } from '@src/types/Employee';


export function EmployeeCard({ employee }: { employee: Employee}) {
  const photoUrl = `http://localhost:3007${employee.photo}`;
  const navigate = useNavigate();
  // const prefetchEmployee = usePrefetchEmployee();

  const gotoEmployeePage = (id) => {
    navigate(`/team/${id}`);
  }

  return (
    <Stack border={1} minWidth='550px' padding={1}>
      <Stack direction='row' spacing={3}>
        <img 
          src={photoUrl} width={128} height={128}
          alt={`Фото сотрудника ${employee.fullName}`}
        />
        <Stack spacing={2} flexGrow={1}>
          <Typography variant='h6'>{employee.fullName}</Typography>
          <Stack direction='row' spacing={2}>
            <Box>{employee.contacts.phone}</Box>
            <Box>{employee.contacts.email}</Box>
          </Stack>
          <Box>Специализация: {employee.skills.specialization}</Box>
        </Stack>
      </Stack>
      <Stack direction='row' justifyContent='right'>
        <Button 
          onClick={() => gotoEmployeePage(employee.id)} 
          // onMouseEnter={() => prefetchEmployee(employee.id)}
        >
          Подробнее
        </Button>
      </Stack>
    </Stack>
  )
}