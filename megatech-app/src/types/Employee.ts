import type { EmployeeContacts } from "./EmployeeContacts";
import type { EmployeeSex } from "./EmployeeSex";
import type { EmployeeSkills } from "./EmployeeSkills";

export type Employee = {
  id: number;
	fullName: string;
	sex: EmployeeSex;
  skills: EmployeeSkills;
	experienceYears: number;
  contacts: EmployeeContacts;
	bio: string;
  photo: string;
}