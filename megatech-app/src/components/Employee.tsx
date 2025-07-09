import { useState, useEffect } from 'react';


export function Employee({ id }) {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployee(id: number) {
      const response = await fetch(`http://localhost:3007/team/${id}`);
      const result = await response.json();
      console.log(result.fullName);
      setEmployee(result);
    }
    fetchEmployee(id);
  }, [id]);

  return (
    <div>{employee?.fullName || 'Загружается информация...'}</div>
  )
}