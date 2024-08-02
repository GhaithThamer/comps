// import React from "react";
import { FcShipped } from "react-icons/fc";
import Button from "../components/Button";

function ButtonPage() {
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
        <Button outline danger >five</Button>
      </div>
      <div>
        <Button outline>six</Button>
      </div>
      <div>
        <Button rounded>seven</Button>
      </div>
    </div>
  )
}

export default ButtonPage;