export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email format.";
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password) 
      ? "" 
      : "Password must be 8+ chars, include uppercase, lowercase, number & special char.";
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword ? "" : "Passwords do not match.";
  };
  