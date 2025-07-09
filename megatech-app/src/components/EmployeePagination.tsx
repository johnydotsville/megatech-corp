import { useState, useEffect } from 'react';
import { Employee } from './Employee';


export function EmployeePagination({ page = 1, limit = 10 }) {
  const [employee, setEmployee] = useState([]);
  
  useEffect(() => {
    async function fetchEmployee() {
      const url = new URL('http://localhost:3007/team');
      url.searchParams.append('page', String(page));
      url.searchParams.append('limit', String(limit));
      const response = await fetch(url);

      const result = await response.json();
      console.log(result.fullName);
      setEmployee(result);
    }
    fetchEmployee();
  }, [page, limit]);

  return (
    <div>{
      employee.length > 0
        ? employee.map(emp => <Employee key={emp.id} employee={emp} />)
        : 'Загружается информация...'}
    </div>
  )
}