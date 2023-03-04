import React from 'react';
import Wrapper from './components/Wrapper';
import Display from './components/Display';
import Engine from './components/Engine';
import { useState } from 'react';

const App = () => {
  const [display, setDisplay] = useState({
    isFinal: false,
    sum: '0',
    currentText: '',
    current: '0',
  });

  return (
    <Wrapper>
      <Display display={display} />
      <Engine display={display} setDisplay={setDisplay} />
    </Wrapper>
  );
};

export default App;
