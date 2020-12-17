class Validation {
  static usernameRegexp = /^[A-Za-z0-9_]{4,25}$/;
  static emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  static passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,128}$/;

  static isValidUsername = (entry : string) => {
    return Validation.usernameRegexp.test(entry);
  }

  static isValidEmail = (entry : string) => {
    return Validation.emailRegexp.test(entry);
  }

  static isValidUsernameOrEmail = (entry : string) => {
    return Validation.usernameRegexp.test(entry) ??
           Validation.emailRegexp.test(entry);
  }

  static isValidPassword = (entry : string) => {
    return Validation.passwordRegexp.test(entry);
  }
}

export default Validation;