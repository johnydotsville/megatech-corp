import { team } from '@api/urls';
import type { Employee } from '../types/Employee';


type FetchTeamResult = {
  employees: Employee[];
  pagination: {
    totalEmployees: number;
  }
}


export async function fetchTeam(page = 1, limit = 10): Promise<FetchTeamResult> {
  const url = new URL(team);
  url.searchParams.append('page', String(page));
  url.searchParams.append('limit', String(limit));
  
  const response = await fetch(url);

  const result = await response.json();
  const totalEmployees = Number(response.headers.get('X-Total-Count')) || 0;

  return {
    employees: result,
    pagination: {
      totalEmployees
    }
  }
}