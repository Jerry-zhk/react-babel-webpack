import React, {useState} from 'react'
import './App.scss';


const App = () => {

  const [count, setCount] = useState<number>(0);
  return (
    <div>
      Count:{' '}{count}
      <button onClick={() => {
        setCount((c) => c + 1)
      }}>+</button>
    </div>
  )
}


export default App;