import React from 'react';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const cookies = JSON.parse(Cookies.get('user'));

  return (
    <>
      <h1>Você foi logado: {cookies.user.email}</h1>
    </>
  );
};

export default Dashboard;
