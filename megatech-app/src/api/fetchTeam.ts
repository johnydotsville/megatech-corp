import { team } from '@api/urls';


export async function fetchTeam(page = 1, limit = 10) {
  const url = new URL(team);
  url.searchParams.append('page', String(page));
  url.searchParams.append('limit', String(limit));
  
  const response = await fetch(url);

  return await response.json();
}