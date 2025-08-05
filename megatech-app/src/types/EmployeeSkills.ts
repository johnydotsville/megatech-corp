export type EmployeeSkills = {
  specialization: string[];
  langs: string[];
  techs: string[];
  platforms: string[];
} & Record<string, string[]>