import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper.js';
import Display from './components/Display.js';
import ButtonPad from './components/ButtonPad.js';
import Button from './components/Button.js';
import data from './components/data.js';
import { useState } from 'react';

function App() {
  
  const [display, setDisplay] = useState({
    isFinal: false,
    sum: '0',
    currentText: '',
    current: '0'
  })
  
  const handleButton = (button) => {
    if (display.current === '0'){
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          current: button
        }
      });
    } else if (display.current[display.current.length -1] === '-' || display.current[display.current.length -1] === '+' || display.current[display.current.length -1] === '*' || display.current[display.current.length -1] === '/') {
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          sum: display.sum === '0' ? display.current : display.sum + display.current,
          current: button
        }
      })
    }
    else {
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          current: display.current + button
        }
      })
    }
  }
    
  const handleClear = () => {
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: '0',
        current: '0'
      }
    })
  }
  
  const handleMath = (button) => {
    display.current[display.current.length -1] === '.'
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum,
        current: display.current.slice(0, display.current.length - 1) + button
      }
    })
    :
    (display.current[display.current.length -1] === '/' || display.current[display.current.length -1] === '*' || display.current[display.current.length -1] === '+') && button !== '-' 
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum,
        current: display.current.slice(0, display.current.length - 1) + button
      }
    })
    :
    (display.current[display.current.length -1] === '/' || display.current[display.current.length -1] === '*' || display.current[display.current.length -1] === '+') && button === '-' 
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum === '0' ? display.current : display.sum + display.current,
        current: button
      }
    })
    :
    (display.sum[display.sum.length -1] === '*' || display.sum[display.sum.length -1] === '/') && display.current[display.current.length -1] === '-' && button === '+'
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum.slice(0, display.sum.length - 1),
        current: button
      }
    })
    :
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum,
        current: display.current + button
      }
    })
  }
  
  const handleDecimal = (button) => {
    if (!display.current.includes('.')){
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          current: display.current + button
        }
      })
    }
  }
  
  const handlePercent = (button) => {
    if (!display.current.includes('%')){
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          current: (parseFloat(display.current) * 0.01).toString()
        }
      })
    }
  }
  
  const handleInverse = () => {
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        current: (parseFloat(display.current) * -1).toString()
      }
    })
  }
  
  const handleSum = () => {
    display.current[display.current.length -1] === '.'
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum === '0' ? display.current.slice(0, display.current.length - 1) : display.sum + display.current.slice(0, display.current.length - 1),
        isFinal: true
      }
    })
    :
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: display.sum === '0' ? display.current : display.sum + display.current,
        isFinal: true
      }
    })
  }
  
  let fraction = '';
  if (display.isFinal){
    // eslint-disable-next-line
    let finalCount = new Function('return ' + `${display.sum}`)
    if (finalCount() > 9999999999 || finalCount() < -9999999999){
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        isFinal: false,
        currentText: finalCount().toExponential(3),
        current: Number(finalCount().toExponential(3))
      }
    })
    } else if (finalCount().toString().length > 10) {
      fraction = finalCount().toString()
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          isFinal: false,
          current: parseFloat(fraction.substring(0, 10))
        }
      })
    } else {
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          isFinal: false,
          current: finalCount()
        }
      })
    }
  }
  
  const handleNewCount = (button) => {
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        currentText: ''
      }
    })
    button === '0' || button === '1' || button === '2' || button === '3' || button === '4' || button === '5' || button === '6' || button === '7' || button === '8' || button === '9'
    ? 
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: '0',
        current: button
      }
    })
    :
    button === '/' || button === '*' || button === '-' || button === '+'
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: '',
        current: display.current + button
      }
    })
    :
    button === '+/-'
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        current: display.current * -1,
        currentText: (display.current * -1 ).toExponential(3)
      }
    })
    :
    button === '.' && !toString(display.current).includes('.')
    ?
    setDisplay(prevDisplay => {
      return {
        ...prevDisplay,
        sum: '',
        current: display.current + button,
        }
      })
    :
    button === '%' && !toString(display.current).includes('%')
    ?
      setDisplay(prevDisplay => {
        return {
          ...prevDisplay,
          sum:'',
          current: display.current * 0.01,
          currentText: (display.current * 0.01 ).toExponential(3)
        }
      })
    :
    handleClear()
  }
  
  const buttons = data.map(button => {
    return (
      <Button 
        key={button.id}
        value={button.value}
        id={button.id}
        onClick={() => 
          typeof display.current === 'number'
        ? handleNewCount(button.value)
        : button.value === 'C'
        ? handleClear()
        : button.value === '/' || button.value === '*' || button.value === '-' || button.value === '+' 
        ? handleMath(button.value)
        : button.value === '.'
        ? handleDecimal(button.value)
        : button.value === '%'
        ? handlePercent(button.value)
        : button.value === '+/-'
        ? handleInverse()
        : button.value === '='
        ? handleSum()
        : handleButton(button.value)}
      />
    )
  });

  return (
    <Wrapper>
      <Display 
        current={display.current}
        currentText={display.currentText}
        sum={display.sum}
        fraction={fraction}
      />
      <ButtonPad>
        {buttons}
      </ButtonPad>
    </Wrapper>
  )
}

export default App;
