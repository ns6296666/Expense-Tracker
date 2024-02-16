import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../components/utils/Auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signupHandler({ email, password }) {
    try {
      await createUser(email, password);
    } catch (error) {
      console.error("Error in signupHandler:", error);
      Alert.alert(
        "Authentication failed",
        "Could not create user. Please check your input fields or try again later!"
      );
    }
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
