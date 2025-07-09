import { useState } from "react"


function App() {
  let [counter, setCounter] = useState(0);
   
  const handleCounter = () => {
    setCounter(counter + 1);
    if(counter >= 20){
      setCounter(20);
    }
  }
  const handleCounter2 = () => {
    setCounter(counter - 1);
    if(counter <= 0){
      setCounter(0);
    }
  }
  
  return (
    <>
    <h1>The count is: {counter}</h1>
    <button onClick={handleCounter}>Click Me to update UI</button>
    <button onClick={handleCounter2}>Click Me to decrease UI</button>
    </>
  )
}

export default App
