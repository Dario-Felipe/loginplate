import React, { useState } from 'react';
import { Input, Button } from '@gympass/yoga';
import fire from './services/fire';

function App() {
  const [user, setUser] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    login: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(false);

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
      .then((result) => setUser(result))
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <h1>Welcome to Loginplate</h1>
      {user ? (
        <h3>You are: {user.user.email}</h3>
      ) : (
        <form
          onSubmit={handleSingIn}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <Input.Email
            label="E-mail"
            name="login"
            value={inputInfo.login}
            onChange={handleInput}
            onClean={() => setInputInfo({ ...inputInfo, login: '' })}
          />

          <Input.Password
            label="Password"
            name="password"
            value={inputInfo.password}
            onChange={handleInput}
          />

          <div>
            <Button type="submit">Sing In</Button>
          </div>

          {errorMessage && (
            <div>
              <span style={{ color: 'red' }}>{errorMessage}</span>
            </div>
          )}
        </form>
      )}
    </>
  );
}

export default App;
