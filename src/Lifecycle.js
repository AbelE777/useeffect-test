import React, {useEffect, useState} from 'react'

const Lifecycle = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    console.log('ue []')

    return ()=>{
      console.log('cleanup ue []')
    }
  }, [])

  useEffect(() => {
    console.log('ue no dependency')
    return ()=>{
      console.log('cleanup no dependency')
    }
  })

  useEffect(() => {
    console.log('ue [counter1]')
    return ()=>{
      console.log('cleanup [counter1]')
    }
  }, [counter1])
  
  useEffect(() => {
    console.log('ue [counter2]')
    return ()=>{
      console.log('cleanup [counter2]')
    }
  }, [counter2])
  
  useEffect(() => {
    console.log('ue [counter1, counter2]')
    return ()=>{
      console.log('cleanup [counter1, counter2]')
    }
  }, [counter1, counter2])
  
  
  return (
    <div>
      <h1>clicks counter1: {counter1}</h1>
      <h1>clicks counter2: {counter2}</h1>

      <button onClick={()=>(setCounter1(counter1+1))}>Increment c1</button>
      <button onClick={()=>(setCounter2(counter2+1))}>Increment c2</button>
    </div>
  )
}

export default Lifecycle