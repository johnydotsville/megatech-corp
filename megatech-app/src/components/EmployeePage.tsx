import { useParams } from 'react-router-dom';
import { useEmployee } from '@src/hooks/useEmployee';
import { Stack, Box, Container } from '@mui/material';
import { useEmployeeBioAndFeedbacks } from '@src/hooks/useEmployeeBioAndFeedbacks';
import { FeedbackView } from '@components/FeedbackView';


export function EmployeePage() {
  const params = useParams();
  const id = params.id;
  
  // const { employee: employeeBio, employeeLoading: employeeBioLoading, employeeError: employeeBioError } = useEmployee(id);

  // if (employeeBioLoading) {
  //   return <Box>Загружается информация о сотруднике...</Box>
  // }

  // if (employeeBioError) {
  //   return <Box>Не удалось загрузить информацию о сотруднике. Попробуйте позже.</Box>
  // }

  const { 
    employeeBio, employeeBioLoading, employeeBioError,
    feedbacks, feedbacksLoading, feedbacksError
  } = useEmployeeBioAndFeedbacks(id);

  if (employeeBioLoading || feedbacksLoading) {
    return <div>Loading...</div>;
  }

  if (employeeBioError || feedbacksError) {
    return <div>Error loading data</div>;
  }

  const photoUrl = `http://localhost:3007${employeeBio.photo}`;

  return (
    <Container maxWidth='md'>
    <Stack gap={2}>
      <Stack direction='row' spacing={3}>
        <img src={photoUrl} width={256}/>
        <Stack spacing={3}>
          <Box>{ employeeBio.fullName }</Box>
          <Stack direction='row' spacing={2}>
            <Box>{ employeeBio.contacts.phone }</Box>
            <Box>{ employeeBio.contacts.email }</Box>
          </Stack>
          <Box>Опыт: { employeeBio.experienceYears } лет</Box>
          <Box>Специализация: { employeeBio.skills.specialization }</Box>
          <Box>Владеет языками: { employeeBio.skills.langs.join(', ') }</Box>
          <Box>Платформы: { employeeBio.skills.platforms.join(', ') }</Box>
          <Box>Технологии: { employeeBio.skills.techs.join(', ') }</Box>
        </Stack>
      </Stack>
      <Box sx={{ textAlign: 'justify' }}>{ employeeBio.bio }</Box>
    </Stack>
    <Box>Отзывы о сотруднике:</Box>
    <Stack direction='column' gap={1}>
      { feedbacks.feedbacks.map(feedback => <FeedbackView feedback={feedback} />) }
    </Stack>
    </Container>
  )
}