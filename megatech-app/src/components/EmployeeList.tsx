import type { Employee } from "@src/types/Employee"
import { EmployeeCard } from './EmployeeCard';
import { Stack } from "@mui/material";


type Props = {
  employees: Employee[];
}


export function EmployeeList({ employees }: Props) {
  return (
    <Stack gap={2}>
      { employees.map(emp => <EmployeeCard key={emp.id} employee={emp} />) }
    </Stack>
  )
}