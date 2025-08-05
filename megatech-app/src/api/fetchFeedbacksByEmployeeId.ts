export async function fetchFeedbacksByEmployeeId(id) {
  const url = new URL(`http://localhost:3007/team/${id}/feedbacks`);
  const response = await fetch(url);

  return await response.json();
}