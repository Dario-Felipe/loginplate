import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const cookies = JSON.parse(Cookies.get('user'));

  return (
    <>
      <h1>Você foi logado: {cookies.user.email}</h1>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </>
  );
};

export default Dashboard;
