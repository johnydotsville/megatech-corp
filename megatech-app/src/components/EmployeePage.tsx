import { useParams } from 'react-router-dom';
import { useEmployee } from '@src/hooks/useEmployee';
import { Stack, Box, Container } from '@mui/material';


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

  const photoUrl = `http://localhost:3007${employee.photo}`;

  return (
    <Container maxWidth='md'>
    <Stack gap={2}>
      <Stack direction='row' spacing={3}>
        <img src={photoUrl} width={256}/>
        <Stack spacing={3}>
          <Box>{ employee.fullName }</Box>
          <Stack direction='row' spacing={2}>
            <Box>{ employee.contacts.phone }</Box>
            <Box>{ employee.contacts.email }</Box>
          </Stack>
          <Box>Опыт: { employee.experienceYears } лет</Box>
          <Box>Специализация: { employee.skills.specialization }</Box>
          <Box>Владеет языками: { employee.skills.langs.join(', ') }</Box>
          <Box>Платформы: { employee.skills.platforms.join(', ') }</Box>
          <Box>Технологии: { employee.skills.techs.join(', ') }</Box>
        </Stack>
      </Stack>
      <Box sx={{ textAlign: 'justify' }}>{ employee.bio }</Box>
    </Stack>
    </Container>
  )
}