/// Validators for form fields.
function validateName(name: string): string | null {
  if (!name) {
    return "Please enter your name.";
  }
  return null;
}

function validateAge(dob: number | null): string | null {
  if (!dob) {
    return "Please enter your age.";
  } else if (dob < 0) {
    return "Please enter a valid age.";
  }
  return null;
}

function validateEmail(email: string): string | null {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
    return "Please enter you email.";
  } else if (!emailRegex.test(email)) {
    return "Please enter a valid email.";
  }
  return null;
}

function validatePassword(password: string): string | null {
  if (!password) {
    return "Please enter your password.";
  } else if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  return null;
}

export { validateName, validateAge, validateEmail, validatePassword };
