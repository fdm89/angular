export enum role {
  staff="staff",
  student="student",
  manager="manager",
  admin="admin"
}
//type role = "staff"|"student"|"manager"|"admin";
export type gender = "male"|"female"|"other";
export interface Company {

      id: number,
      name: string,
      description: string,
      location: {
          city: string,
          street: string,
          postalCode: string,
      }
};
export interface User {
id: number,
name: string,
surname: string,
age: number,
dateOfBirth: string,
address: {
  city: string,
  street: string,
  postalCode: string,
},
role: role,
username: string,
profilePhotoUrl: string,
companies: Company[],
gender: gender,
}
