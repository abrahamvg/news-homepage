import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const [text, changeText]  = useState(0)

  useEffect(()=>{
    document.title = `You clicked ${text} times`
  })

  return (
    <>
      <div>
        This is a random text {text}
        <br/>
        <button onClick={()=>{changeText(text + 1)}}>Click Me !!</button>
      </div>
    </>
  );
}

export default App;
