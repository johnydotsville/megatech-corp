import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import { EmployeeCard } from './EmployeeCard';


export function EmployeePagination({ page = 1, limit = 10 }) {
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    async function fetchEmployee() {
      const url = new URL('http://localhost:3007/team');
      url.searchParams.append('page', String(page));
      url.searchParams.append('limit', String(limit));
      const response = await fetch(url);

      const result = await response.json();
      console.log(result.fullName);
      setEmployees(result);
    }
    fetchEmployee();
  }, [page, limit]);

  const employeesList = employees.length > 0
    ? employees.map(emp => <EmployeeCard key={emp.id} employee={emp} />)
    : 'Загружается информация...';

  return (
    <Stack spacing={3} alignItems='center'>
      {employeesList}
    </Stack>
  )
}