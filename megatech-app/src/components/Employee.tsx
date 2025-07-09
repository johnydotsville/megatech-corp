export function Employee({ employee }) {
  return (
    <div>{employee.fullName}, {employee.contacts.phone}</div>
  )
}