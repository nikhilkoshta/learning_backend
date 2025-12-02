import { useState } from 'react'
import './App.css'
import CustomButton from './ui-components/CustomButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomButton count={count} setCount={setCount}/>
    </>
  )
}



export default App
