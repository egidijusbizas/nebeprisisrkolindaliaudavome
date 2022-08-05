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
    <div className='flexcontainer filler'>
      <LoginBox />
    </div>
  );
};

export default Login;
