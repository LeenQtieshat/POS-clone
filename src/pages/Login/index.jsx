import { useState } from "react";
import { useDispatch } from "react-redux";
import useEndpoints from "../../hooks/useEndpoints";
import { saveAccessToken } from "../../helpers/accessToken";
import { login } from "../../redux/actionCreators/auth";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";

import styles from "./styles.module.scss";
const { pageContainer } = styles;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginInvalid, setLoginInvalid] = useState(false);

  const dispatch = useDispatch();

  const { signIn } = useEndpoints();

  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      const {
        data: { accessToken, idToken, refreshToken },
      } = await signIn(data);
      handleLoginSuccess(accessToken, idToken, refreshToken);
    } catch (err) {
      setLoginInvalid(err?.response?.status === 401);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = (accessToken, idToken, refreshToken) => {
    saveAccessToken(accessToken, idToken, refreshToken);
    dispatch(login({ accessToken, idToken, refreshToken }));
  };

  return (
    <div className={pageContainer}>
      <Logo />
      <LoginForm
        loginInvalid={loginInvalid}
        onSubmit={handleLogin}
        loading={isLoading}
      />
    </div>
  );
};

export default Login;
