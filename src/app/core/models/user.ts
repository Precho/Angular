export class Address {
  constructor (
    public city: String,
    public homeNumber: String,
    public postalCode: String,
    public street?: String,
  ) { }
}

export class User {
  constructor (
    public name: String,
    public surname: String,
    public indexNumber?: number,
    public address?: Address,
    public img: String = `http://www.fillmurray.com/300/30${Math.floor(Math.random() * 10)}`,
  ) { }
}
