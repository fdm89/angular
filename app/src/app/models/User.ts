export enum role {
  STAFF = "staff",
  STUDENT = "student",
  MANAGER = "manager",
  ADMIN = "admin",
  staff = "staff"
}
//type role = "staff"|"student"|"manager"|"admin";
export enum gender {
MALE="male",
FEMALE="female",
OTHER="other"
}
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
companies?: Company[],
gender: gender,
}
