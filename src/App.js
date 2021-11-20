import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div id="WoofCount">{count}</div>
        <div id="WoofClick" onClick={
          () => 
          {
            setCount(count+1)
            setShow(true)
            console.log(show)
          }
        }>
          <div 
            className={show ? 'Woof' : 'Woof hide'}
            onTransitionEnd={() => {
              setShow(false)
              console.log(show)
            }
            }
          >
            Woof!
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
