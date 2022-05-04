import { useState } from "react";
// import FetchCard from "./FetchCard";
import Lifecycle from "./Lifecycle";
// import ResizeApp from "./ResizeApp";

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={()=>setShow(!show)}>
        Show/hide
      </button>
      {show && <Lifecycle />}
      {/* <FetchCard /> */}

      
    </div>
  );
}

export default App;
