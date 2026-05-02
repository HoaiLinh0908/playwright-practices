import { APIRequestContext } from "@playwright/test";
import { User } from "../models/user.js";

export class AutoExeAPI {
  constructor(private api: APIRequestContext, private baseURL: string) {}

  async createAccount(user: User) {
    const response = await this.api.post(`${this.baseURL}/api/createAccount`, {
      form: {
        title: user.title,
        name: user.name,
        birth_date: user.dob.getDate().toString(),
        birth_month: (user.dob.getMonth() + 1).toString(),
        birth_year: user.dob.getFullYear().toString(),
        email: user.email,
        password: user.password,
        firstname: user.firstName,
        lastname: user.lastName,
        company: user.company,
        address1: user.address,
        address2: user.address2,
        country: user.country,
        state: user.state,
        city: user.city,
        zipcode: user.zipcode,
        mobile_number: user.mobileNumber
      },
    });

    if (!response.ok()) {
      throw new Error(
        `Failed to create account: ${response.status()} ${await response.text()}`
      );
    }

    return response.json();
  }

  async getCSRFToken() {
    const cookies = (await this.api.storageState()).cookies;
    const csrfCookie = cookies.find((cookie) => cookie.name === "csrftoken");
    if (!csrfCookie) {
      throw new Error("CSRF token cookie not found");
    }
    return csrfCookie.value;
  }
}
