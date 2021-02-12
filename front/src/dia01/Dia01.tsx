import React, { useEffect, useState } from 'react'
import './../App.css';
import { Alert, Button } from 'bold-ui';
import OurButton from './OurButton';

function Dia01() {

  var [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setShowAlert(count === 3)
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <OurButton onClick={handleClick} count={count}/>

      <Button onClick={handleClick} kind='danger' >
        Count click 2 ({count} vezes)
      </Button>

      {showAlert ?
        <Alert type='danger'>É Nóis</Alert> : <></>
        }
        {count === 6 ?
      <Button onClick={handleClick} kind='normal' >
        Count click 2 ({count} vezes)
      </Button>:<></>}

    </div>
  );
}

export default Dia01;
