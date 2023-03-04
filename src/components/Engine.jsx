import React from 'react';
import Button from './Button';
import { ButtonBox } from '../styles';
import data from './data';

const ButtonPad = ({ display, setDisplay }) => {
  const handleButton = (button) => {
    if (display.current === '0') {
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          current: button,
        };
      });
    } else {
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          current: display.current + button,
        };
      });
    }
  };

  const handleClear = () => {
    setDisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        sum: '0',
        current: '0',
      };
    });
  };

  const handleMath = (button) => {
    display.current[display.current.length - 1] === '.'
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum:
              display.sum === '0'
                ? display.current.slice(0, display.current.length - 1) + button
                : display.sum +
                  display.current.slice(0, display.current.length - 1) +
                  button,
            current: '0',
          };
        })
      : setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum:
              display.sum === '0'
                ? display.current + button
                : display.sum + display.current + button,
            current: '0',
          };
        });
  };

  const handleDecimal = (button) => {
    if (!display.current.includes('.')) {
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          current: display.current + button,
        };
      });
    }
  };

  const handlePercent = (button) => {
    if (!display.current.includes('%')) {
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          current: (parseFloat(display.current) * 0.01).toString(),
        };
      });
    }
  };

  const handleInverse = () => {
    setDisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        current: (parseFloat(display.current) * -1).toString(),
      };
    });
  };

  const handleSum = () => {
    display.current[display.current.length - 1] === '.'
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum:
              display.sum === '0'
                ? display.current.slice(0, display.current.length - 1)
                : display.sum +
                  display.current.slice(0, display.current.length - 1),
            isFinal: true,
          };
        })
      : setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum:
              display.sum === '0'
                ? display.current
                : display.sum + display.current,
            isFinal: true,
          };
        });
  };

  let fraction = '';
  if (display.isFinal) {
    // eslint-disable-next-line
    let finalCount = new Function('return ' + `${display.sum}`);
    if (finalCount() > 9999999999 || finalCount() < -9999999999) {
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          isFinal: false,
          currentText: finalCount().toExponential(3),
          current: Number(finalCount().toExponential(3)),
        };
      });
    } else if (finalCount().toString().length > 10) {
      fraction = finalCount().toString();
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          isFinal: false,
          current: parseFloat(fraction.substring(0, 10)),
        };
      });
    } else {
      setDisplay((prevDisplay) => {
        return {
          ...prevDisplay,
          isFinal: false,
          current: finalCount(),
        };
      });
    }
  }

  const handleNewCount = (button) => {
    setDisplay((prevDisplay) => {
      return {
        ...prevDisplay,
        currentText: '',
      };
    });
    button === '0' ||
    button === '1' ||
    button === '2' ||
    button === '3' ||
    button === '4' ||
    button === '5' ||
    button === '6' ||
    button === '7' ||
    button === '8' ||
    button === '9'
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum: '0',
            current: button,
          };
        })
      : button === '/' || button === '*' || button === '-' || button === '+'
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum: display.current + button,
            current: '0',
          };
        })
      : button === '+/-'
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            current: display.current * -1,
            currentText: (display.current * -1).toExponential(3),
          };
        })
      : button === '.' && !toString(display.current).includes('.')
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            sum: '0',
            current: display.current + button,
          };
        })
      : button === '%' && !toString(display.current).includes('%')
      ? setDisplay((prevDisplay) => {
          return {
            ...prevDisplay,
            current: display.current * 0.01,
            currentText: (display.current * 0.01).toExponential(3),
          };
        })
      : handleClear();
  };

  const buttons = data.map((button) => {
    const { value, id } = button;
    const handleButtonPush = () => {
      typeof display.current === 'number'
        ? handleNewCount(value)
        : value === 'C'
        ? handleClear()
        : value === '/' || value === '*' || value === '-' || value === '+'
        ? handleMath(value)
        : value === '.'
        ? handleDecimal(value)
        : value === '%'
        ? handlePercent(value)
        : value === '+/-'
        ? handleInverse()
        : value === '='
        ? handleSum()
        : handleButton(value);
    };

    return (
      <Button
        key={id}
        value={value}
        id={id}
        handleButtonPush={handleButtonPush}
      />
    );
  });

  return <ButtonBox>{buttons}</ButtonBox>;
};

export default ButtonPad;
