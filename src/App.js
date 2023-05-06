
import { useState } from 'react';
import './App.css';

function App() {


  const [leftPos, setLeftPos] = useState('50')

  const [topPos, setTopPos] = useState('50')

  const [backgroundColor, setBackgroundColor] = useState('')

  const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  }




  return (

    <div className="App" style={{ background: backgroundColor ? `black` : '' }}>



      <button className='Btn'
        style={{
          position: `absolute`,
          left: `${leftPos}%`,
          top: `${topPos}%`,

        }}

        onMouseEnter={() => {
          setLeftPos(random(0, 90))
          setTopPos(random(0, 90))
          setBackgroundColor(true)

        }}
        onClick={() => alert('you win')}>
        Попробуй нажми
      </button>
      <button onClick={() => { setBackgroundColor('') }}>restart</button>

    </div >
  );
}

export default App;
