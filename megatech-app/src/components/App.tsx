import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { TeamPagination } from '@/src/components/TeamPagination';
import { EmployeePage } from './EmployeePage';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/team' element={<TeamPagination />} />
        <Route path='/team/:id' element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  )
}