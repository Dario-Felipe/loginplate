import React from 'react';
import { Input, Button } from '@gympass/yoga';

const Form = ({ mainHandler, handlers, infos }) => (
  <form
    onSubmit={mainHandler}
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
      value={infos.inputInfo.login}
      onChange={handlers.changeInput}
      onClean={() => handlers.setInputInfo({ ...infos.inputInfo, login: '' })}
    />

    <Input.Password
      label="Password"
      name="password"
      value={infos.inputInfo.password}
      onChange={handlers.changeInput}
    />

    {infos.isRegister && (
      <Input.Password
        label="Password Confirmation"
        name="passwordConfirmation"
        value={infos.inputInfo.passwordConfirmation}
        onChange={handlers.changeInput}
      />
    )}

    <div>
      <Button type="submit">
        {infos.isRegister ? 'Create account' : 'Sing In'}
      </Button>
    </div>

    {infos.errorMessage && (
      <div>
        <span style={{ color: 'red' }}>{infos.errorMessage}</span>
      </div>
    )}
  </form>
);

export default Form;
