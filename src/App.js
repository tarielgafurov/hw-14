import { useEffect, useRef, useState } from 'react';
import styles from './Colors.module.css'

function App() {

  const [time , setTime] = useState(false)
  const container = useRef(null)

  useEffect(() => {

    setTimeout(() => {
      setTime(!time)
    } , 1000)

  } , [time])
  return <div ref={container} className={!time ? styles.red : styles.green}></div>
}

export default App;
