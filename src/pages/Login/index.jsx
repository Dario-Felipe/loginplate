import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useAuth } from '../../providers/auth';
import fire from '../../services/fire';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const [inputInfo, setInputInfo] = useState({
    login: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();
  const { setAuth } = useAuth();

  const handleInput = (event) => {
    setInputInfo({
      ...inputInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSingIn = (event) => {
    event.preventDefault();
    setErrorMessage(false);

    fire
      .auth()
      .signInWithEmailAndPassword(inputInfo.login, inputInfo.password)
      .then((result) => {
        Cookies.set('user', JSON.stringify(result));
        setAuth(true);
        history.push('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <LoginForm
        handleSingIn={handleSingIn}
        handleInput={handleInput}
        errorMessage={errorMessage}
        inputInfo={inputInfo}
        setInputInfo={setInputInfo}
      />
    </>
  );
};

export default Login;
