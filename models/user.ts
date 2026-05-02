export type User = {
  name: string;
  email: string;
  title: UserTitle;
  password: string;
  dob: Date;
  signUpForNewsletter: boolean;
  receiveSpecialOffers: boolean;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

export type UserTitle = "Mr." | "Mrs.";
