import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(()=>{
    fetch('/leaderboard')
    .then(response => response.json())
    .then(data => {
      setCount(data[0]['count'])
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div id="WoofCount">{count}</div>
        <div id="WoofClick" onClick={
          () => 
          {
            setCount(count+1)
            setShow(true)

            const dog = {"name":"Dog1", "count":1};
            console.log(JSON.stringify(dog))
            fetch('/dog', {
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
