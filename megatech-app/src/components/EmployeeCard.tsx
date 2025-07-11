import { Stack, Box, Button } from '@mui/material';


export function EmployeeCard({ employee }) {
  const photoUrl = `http://localhost:3007${employee.photo}`;

  return (
    <Stack direction='row' spacing={3} border={1} padding={1}>
      <img src={photoUrl} width={128} height={128}/>
      <Stack spacing={2}>
        <Box>{employee.fullName}</Box>
        <Stack direction='row' spacing={2}>
          <Box>{employee.contacts.phone}</Box>
          <Box>{employee.contacts.email}</Box>
        </Stack>
        <Box>Специализация: {employee.skills.specialization}</Box>
        <Stack direction='row' justifyContent='right'><Button>Подробнее</Button></Stack>
      </Stack>
    </Stack>
  )
}