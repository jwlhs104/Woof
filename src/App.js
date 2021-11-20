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

            const dog = {"name":"Dog1", "count":count+1};
            console.log(JSON.stringify(dog))
            fetch('http://localhost:8000/dog', {
              method: 'POST',
              headers: { "Content-Type": "text/json"},
              body: JSON.stringify(dog)
            })
          }
        }>
          <div 
            className={show ? 'Woof' : 'Woof hide'}
            onTransitionEnd={() => {
              setShow(false)
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
