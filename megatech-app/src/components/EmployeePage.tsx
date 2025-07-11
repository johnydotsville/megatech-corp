import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeCard } from './EmployeeCard';


export function EmployeePage() {
  const [employee, setEmployee] = useState();
  const params = useParams();
  
  useEffect(() => {
    async function fetchEmployee() {
      const url = new URL(`http://localhost:3007/team/${params.id}`);
      const response = await fetch(url);

      const result = await response.json();
      console.log(result.fullName);
      setEmployee(result);
    }
    fetchEmployee();
  }, []);

  if (!employee) {
    return <div>Загружается информация о сотруднике...</div>
  }

  return (
    <EmployeeCard employee={employee} />
  )
}