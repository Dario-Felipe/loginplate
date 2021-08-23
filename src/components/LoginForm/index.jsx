import React from 'react';
import { Input, Button } from '@gympass/yoga';

const LoginForm = ({
  handleSingIn,
  inputInfo,
  handleInput,
  setInputInfo,
  errorMessage,
}) => (
  <form
    onSubmit={handleSingIn}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    }}
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
);

export default LoginForm;
