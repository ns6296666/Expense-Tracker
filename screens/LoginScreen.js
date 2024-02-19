import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../components/utils/Auth";
import { Alert } from "react-native";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/auth";

function LoginScreen() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function signInHandler({ email, password }) {
    setIsAuthenticated(true);
    try {
      const token = await loginUser(email, password);
      console.log("==========", token);
      dispatch(authenticate(token));
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in. Please check your credentials or try again later!"
      );
      setIsAuthenticated(false);
    }
  }

  if (isAuthenticated) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
