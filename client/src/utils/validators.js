import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
  //   if (!username) {
  //     return "Username is requires";
  //   }
  //   if (username.length < 3) {
  //     return "Username too small";
  //   }
  //   if (username.length > 20) {
  //     return "Username must have to be less than 20 character";
  //   }
  //   return "";

  if (!isValidUsername(username)) {
    return {
      isValid: false,
      errorMessage: "Username is Invalid",
    };
  }
  
};
