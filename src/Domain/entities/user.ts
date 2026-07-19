import BaseModel from "./base.model";

export default class User extends BaseModel {
  name: string;
  email: string;
  org: string;
  password: string;
  role: string;
  picture: string;

  constructor({
    id,
    name,
    email,
    org,
    password,
    role,
    picture,
  }: {
    id: string;
    name: string;
    email: string;
    org: string;
    password: string;
    role: string;
    picture: string;
  }) {
    super(id);
    this.name = name;
    this.email = email;
    this.org = org;
    this.password = password;
    this.role = role;
    this.picture = picture;
  }
}
