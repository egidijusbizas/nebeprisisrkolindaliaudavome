import React from 'react';

const Register: React.FC = () => {
  const RegisterBox = () => {
    return (
      <div className='box'>
        <h1>Register</h1>
      </div>
    );
  };

  return (
    <div className='flexcontainer filler'>
      <RegisterBox />
    </div>
  );
};

export default Register;
