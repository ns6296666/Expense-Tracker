import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../components/utils/Auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";
import { authenticate } from "../store/auth";
import { useDispatch } from "react-redux";

function SignupScreen() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      const token = await createUser(email, password);
      dispatch(authenticate(token));
    } catch (error) {
      console.error("Error in signupHandler:", error);
      Alert.alert(
        "Authentication failed",
        "Could not create user. Please check your input fields or try again later!"
      );
    }
    setIsAuthenticated(false);
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Creating User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
