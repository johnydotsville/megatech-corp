import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { TeamPagination } from '@/src/components/TeamPagination';
import { EmployeePage } from './EmployeePage';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/team/:id' element={<EmployeePage />} />
        <Route path='/team' element={<TeamPagination />} />
      </Routes>
    </BrowserRouter>
    
  )
}