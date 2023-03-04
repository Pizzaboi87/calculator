import React from 'react';
import { ButtonContainer } from '../styles';

const Button = ({ id, handleButtonPush, value }) => {
  return (
    <ButtonContainer id={id} onClick={handleButtonPush}>
      <p>{value === '*' ? 'x' : value}</p>
    </ButtonContainer>
  );
};

export default Button;