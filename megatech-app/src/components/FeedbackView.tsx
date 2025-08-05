import { Box, Stack } from '@mui/material';


export function FeedbackView({ feedback }) {
  return (
    <Stack direction='column' border={1} padding={1}>
      <Box>{ feedback.from }</Box>
      <Box>{ feedback.feedback }</Box>
    </Stack>
  )
}