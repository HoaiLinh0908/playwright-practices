import { Page } from "@playwright/test";
import { AutoExeBasePage } from "./base.page.js";

export class SignupPage extends AutoExeBasePage {
  constructor(page: Page) {
    super(page);
  }

  get elements() {
    return {
      ...super.elements,
      enterAccountInformationTitle: () => this.page.getByText("Enter Account Information"),
      titleRadio: (title: "Mr." | "Mrs.") =>
        this.page.getByRole("radio").and(this.page.getByLabel(title, { exact: false })),
      accountNameTextbox: () => this.page.locator("#name"),
      accountEmailTextbox: () => this.page.locator("#email"),
      accountInformationPasswordTextbox: () => this.page.locator("#password"),
      dayOfBirthDropdown: () => this.page.locator("#days"),
      monthOfBirthDropdown: () => this.page.locator("#months"),
      yearOfBirthDropdown: () => this.page.locator("#years"),
      newsletterCheckbox: () => this.page.locator("#newsletter"),
      specialOfferCheckbox: () => this.page.locator("#optin"),
      firstNameTextbox: () => this.page.locator("#first_name"),
      lastNameTextbox: () => this.page.locator("#last_name"),
      companyTextbox: () => this.page.locator("#company"),
      address1Textbox: () => this.page.locator("#address1"),
      address2Textbox: () => this.page.locator("#address2"),
      countryDropdown: () => this.page.locator("#country"),
      stateTextbox: () => this.page.locator("#state"),
      cityTextbox: () => this.page.locator("#city"),
      zipcodeTextbox: () => this.page.locator("#zipcode"),
      mobileNumberTextbox: () => this.page.locator("#mobile_number"),
      createAccountButton: () => this.page.getByRole("button", { name: "Create Account" }),
    };
  }

  async clickTitleMrRadio(title: "Mr." | "Mrs.") {
    await this.elements.titleRadio(title).check();
  }

  async fillAccountInformationNameTextbox(name: string) {
    await this.elements.accountNameTextbox().fill(name);
  }

  async fillAccountInformationEmailTextbox(email: string) {
    await this.elements.accountEmailTextbox().fill(email);
  }

  async fillAccountInformationPasswordTextbox(password: string) {
    await this.elements.accountInformationPasswordTextbox().fill(password);
  }

  async selectDayOfBirth(day: string) {
    await this.elements.dayOfBirthDropdown().selectOption(day);
  }

  async selectMonthOfBirth(month: string) {
    await this.elements.monthOfBirthDropdown().selectOption(month);
  }

  async selectYearOfBirth(year: string) {
    await this.elements.yearOfBirthDropdown().selectOption(year);
  }

  async setNewsletterCheckbox(isChecked: boolean) {
    await this.elements.newsletterCheckbox().setChecked(isChecked);
  }

  async setSpecialOfferCheckbox(isChecked: boolean) {
    await this.elements.specialOfferCheckbox().setChecked(isChecked);
  }

  async fillFirstNameTextbox(firstName: string) {
    await this.elements.firstNameTextbox().fill(firstName);
  }

  async fillLastNameTextbox(lastName: string) {
    await this.elements.lastNameTextbox().fill(lastName);
  }

  async fillCompanyTextbox(company: string) {
    await this.elements.companyTextbox().fill(company);
  }

  async fillAddress1Textbox(address1: string) {
    await this.elements.address1Textbox().fill(address1);
  }

  async fillAddress2Textbox(address2: string) {
    await this.elements.address2Textbox().fill(address2);
  }

  async selectCountry(country: string) {
    await this.elements.countryDropdown().selectOption(country);
  }

  async fillStateTextbox(state: string) {
    await this.elements.stateTextbox().fill(state);
  }

  async fillCityTextbox(city: string) {
    await this.elements.cityTextbox().fill(city);
  }

  async fillZipcodeTextbox(zipcode: string) {
    await this.elements.zipcodeTextbox().fill(zipcode);
  }

  async fillMobileNumberTextbox(mobileNumber: string) {
    await this.elements.mobileNumberTextbox().fill(mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.elements.createAccountButton().click();
  }
}
