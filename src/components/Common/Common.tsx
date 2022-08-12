import React from 'react';

interface ErrorProps {
  error: string;
}

export const ErrorBox: React.FC<ErrorProps> = (props) => {
  const { error } = props;
  return (
    <div className='box box__warning'>
      <h1>{error}</h1>
    </div>
  );
};

interface ChildrenProps {
  children?: React.ReactNode;
}

export const FlexContainer: React.FC<ChildrenProps> = (props) => {
  return <div className='flexcontainer flexcolumn fullwidth'>{props.children}</div>;
};

export const Filler: React.FC<ChildrenProps> = (props) => {
  return <div className='filler'>{props.children}</div>;
};

export const FirstLoad: React.FC = () => {
  return (
    <div className='box box__loading'>
      <h1>{`Please wait...`}</h1>
    </div>
  );
};

export const NoData: React.FC = () => {
  return (
    <div className='box box__no_data'>
      <h1>{`No more results...`}</h1>
    </div>
  );
};
