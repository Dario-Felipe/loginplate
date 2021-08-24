import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, Box } from '@gympass/yoga';
import { useAuth } from '../../providers/auth';
import fire from '../../services/fire';
import Form from '../../components/Form';

const Login = () => {
  const [inputInfo, setInputInfo] = useState({
    login: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const history = useHistory();
  const { setAuth } = useAuth();

  const changeInput = (event) => {
    setInputInfo({
      ...inputInfo,
      [event.target.name]: event.target.value,
    });
  };

  const cleanFields = () => {
    setInputInfo({
      login: '',
      password: '',
    });
    setErrorMessage(false);
  };

  const signIn = (event) => {
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

  const createUser = (event) => {
    event.preventDefault();
    setErrorMessage(false);

    if (inputInfo.password !== inputInfo.passwordConfirmation) {
      setInputInfo({ ...inputInfo, password: '', passwordConfirmation: '' });
      return setErrorMessage('The passwords needs be equals, please try again');
    }

    fire
      .auth()
      .createUserWithEmailAndPassword(inputInfo.login, inputInfo.password)
      .then((newCredential) => {
        Cookies.set('user', JSON.stringify(newCredential));
        setAuth(true);
        history.push('/');
      })
      .catch((error) => setErrorMessage(error.message));

    return 0;
  };

  return (
    <>
      <Form
        mainHandler={isRegister ? createUser : signIn}
        handlers={{ changeInput, setInputInfo }}
        infos={{ errorMessage, inputInfo, isRegister }}
      />
      <Box display="flex" alignItems="center">
        <span>
          {isRegister ? 'Are you already registered?' : 'Not registered yet?'}
        </span>
        <Button.Text
          style={{ padding: 4 }}
          onClick={() => {
            setIsRegister(!isRegister);
            cleanFields();
          }}
        >
          {isRegister ? 'Sign In' : 'Create an account'}
        </Button.Text>
      </Box>
    </>
  );
};

export default Login;
