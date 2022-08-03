
export const checkWhiteSpace =(word :string)=>{
    return (/\s/).test(word);
}


export const validateSignUp = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    let errors = [];

    if (firstName === "") {
      errors.push({ firstName: "Enter first name" });
    }
    if (lastName === "") {
      errors.push({ lastName: "Enter last name" });
    }
    if (email === "") {
      errors.push({ email: "Enter email" });
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      errors.push({ email: "Enter valid email " });
    }
    if (password === "") {
      errors.push({ password: "Enter password" });
    } else if (password.length < 8) {
      errors.push({
        password: "Password length must be at least 8 characters",
      });
    }
    return errors;
  };

  export const validateSignIn = (
    email: string,
    password: string
  ) => {
    let errors = [];

    if (email === "") {
      errors.push({ email: "Enter email" });
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      errors.push({ email: "Enter valid email " });
    }
    if (password === "") {
      errors.push({ password: "Enter password" });
    }
    return errors;
  };