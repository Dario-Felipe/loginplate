import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import fire from '../../services/fire';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const [inputInfo, setInputInfo] = useState({
    login: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const history = useHistory();

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
        console.log(result);
        history.push('/dashboard');
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
