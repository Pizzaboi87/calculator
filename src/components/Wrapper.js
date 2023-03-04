import React from 'react';
import Logo from './Logo';
import { WrapperContainer } from '../styles';

const Wrapper = ({ children }) => {
  return (
    <WrapperContainer>
      <Logo />
      {children}
    </WrapperContainer>
  );
};

export default Wrapper;
