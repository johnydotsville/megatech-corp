import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { EmployeePagination } from '@components/EmployeePagination';
import { EmployeePage } from './EmployeePage';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/team/:id' element={<EmployeePage />} />
        <Route path='/team' element={<EmployeePagination page={1} limit={15} />} />
      </Routes>
    </BrowserRouter>
    
  )
}