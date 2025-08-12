import { TextField, Stack, Typography, Button } from "@mui/material"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import type { Feedback } from "@src/types/Feedback";


const schema = z.object({
  from: z.string()
    .min(1, 'Укажите, от кого отзыв.'),
  rate: z.number()
    .min(1, 'Оценка от 1 до 5.')
    .max(5, 'Оценка от 1 до 5.'),
  feedback: z.string()
    .min(5, 'Отзыв не может быть короче 5 символов.')
})


type FormData = z.infer<typeof schema>;


export function FeedbackForm({ onSend }: { onSend: (feedback: Feedback ) => void}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { 
      errors 
    }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    onSend({
      from: data.from,
      rate: data.rate,
      text: data.feedback.trim()
    });
  };

  return (
    <Stack gap={1} component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Typography>Оставить отзыв о сотруднике:</Typography>
      <TextField {...register('from')} />
      <TextField {...register('rate', { valueAsNumber: true })} />
      <TextField {...register('feedback')} multiline rows={7} />
      <Stack justifyContent='flex-end' direction='row'>
        <Button type='submit' variant='outlined'>Отправить</Button>
      </Stack>
    </Stack>
  )
}