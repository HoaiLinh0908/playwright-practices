import { randomUUID } from "node:crypto";
import { User } from "../models/user.js";
import { faker } from "@faker-js/faker";
import { getConfig } from "../configs/config.js";

export function newValidUserData(): User {
  const randomId = randomUUID();
  const user: User = {
    name: `AutoExe_${randomId}`,
    email: `autoexe+${randomId}@test.com`,
    title: "Mr.",
    password: getConfig().userPassword,
    dob: faker.date.past({ years: 30 }),
    signUpForNewsletter: false,
    receiveSpecialOffers: false,
    firstName: "Auto",
    lastName: "Exe",
    company: "Lurin",
    address: "Nguyen Nhu Dai, Da Nang, Vietnam",
    address2: "Quy Hau, Quang Binh",
    country: "Canada",
    state: "Test State",
    city: "Test City",
    zipcode: "50000",
    mobileNumber: "0932473211",
  };
  return user;
}
