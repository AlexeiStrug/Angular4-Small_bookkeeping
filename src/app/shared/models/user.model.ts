export class User {
  private _email: string
  private _password: string;
  private _name: string;
  private _id?: number;


  constructor(email: string, password: string, name: string, id?: number) {
    this._email = email;
    this._password = password;
    this._name = name;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
