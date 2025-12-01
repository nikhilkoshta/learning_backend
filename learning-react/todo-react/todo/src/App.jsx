import { useState } from 'react'
import './App.css'
import { Button } from './ui-components/CustomButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={onClickHandler} count={count} setCount={setCount}/>
    </>
  )
}



export default App
