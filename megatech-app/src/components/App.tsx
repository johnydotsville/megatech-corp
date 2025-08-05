import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { TeamPage } from '@/src/components/TeamPage';
import { EmployeePage } from './EmployeePage';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/team' element={<TeamPage />} />
        <Route path='/team/:id' element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  )
}