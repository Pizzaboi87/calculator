import React from 'react';
import { DisplayContainer, Sum, Input } from '../styles';

const Display = ({display}) => {
  
  const { sum, current, currentText } = display
  
  return (
    <DisplayContainer>
      <Sum>{sum}</Sum>
      <Input id="display">
        {currentText && (current > 9999999999 || current < -9999999999)
          ? currentText
          : current}
      </Input>
    </DisplayContainer>
  );
};

export default Display;
