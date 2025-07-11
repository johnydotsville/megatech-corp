import { team } from '@api/urls';


export async function fetchEmployee(id) {
  const url = new URL(`${team}/${id}`);
  const response = await fetch(url);

  return await response.json();
}