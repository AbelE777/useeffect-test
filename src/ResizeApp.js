import React, { useEffect, useState } from 'react'

const ResizeApp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handeResize = ()=>setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handeResize)

    return ()=>{
      window.removeEventListener('resize', handeResize)
    }
  }, [])
  

  return (
    <div>
      <h1>{windowWidth}</h1>
      { isMobile && <h2>show only mobile device</h2> }      
    </div>
  )
}

export default ResizeApp