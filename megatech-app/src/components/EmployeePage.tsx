import { useParams } from 'react-router-dom';
import { EmployeeCard } from './EmployeeCard';
import { useEmployee } from '@src/hooks/useEmployee';
import { Box } from '@mui/material';


export function EmployeePage() {
  const params = useParams();
  const id = params.id;
  
  const { employee, employeeLoading, employeeError } = useEmployee(id);

  if (employeeLoading) {
    return <Box>Загружается информация о сотруднике...</Box>
  }

  if (employeeError) {
    return <Box>Не удалось загрузить информацию о сотруднике. Попробуйте позже.</Box>
  }

  return (
    <EmployeeCard employee={employee} />
  )
}