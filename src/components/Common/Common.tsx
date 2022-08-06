import React from 'react';

interface ErrorProps {
  error: string;
}

export const ErrorBox: React.FC<ErrorProps> = (props) => {
  const { error } = props;
  return (
    <div className='box'>
      <h1>{error}</h1>
    </div>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

export const FlexContainer: React.FC<ChildrenProps> = (props) => {
  return <div className='flexcontainer flexcolumn fullwidth'>{props.children}</div>;
};

export const Filler: React.FC = () => {
  return <div className='filler'></div>;
};
