// import React from "react";
import { FcShipped } from "react-icons/fc";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button onClick={()=>console.log("button one clicked")} rounded className="bg-red-500 text-black" blue primary namelength="1">one</Button>
      </div>
      <div>
        <Button secondary>two</Button>
      </div>
      <div>
        <Button success outline>three</Button>
      </div>
      <div>
        <Button warning rounded><FcShipped />four</Button>
      </div>
      <div>
        <Button outline danger >four</Button>
      </div>
      <div>
        <Button outline>four</Button>
      </div>
      <div>
        <Button rounded>four</Button>
      </div>
    </div>
  )
}

export default App;