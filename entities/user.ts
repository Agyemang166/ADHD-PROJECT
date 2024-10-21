/**
 * User entity
 * @interface User
 * @export
 * @property {string} id - User ID
 * @property {string} name - User name
 * @property {string} email - User email
 * @property {number} age - User age at the time of registration
 * @property {Date} createdOn - Date when the user was created
 * @property {Date} updatedOn - Date when the user was last updated
 */
export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  createdOn: Date;
  updatedOn: Date;
}
