function validate(password) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
  }