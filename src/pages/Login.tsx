import React from 'react';

const Login: React.FC = () => {
  const LoginBox = () => {
    return (
      <div className='box'>
        <h1>Login</h1>
      </div>
    );
  };

  return (
    <div className='container filler'>
      <LoginBox />
    </div>
  );
};

export default Login;
