// import React from "react";
import { FcShipped } from "react-icons/fc";
import Button from "./components/Button";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion"

function App() {
  const materials =[
    {title:"İspanyolet", content:"kanat dikey"},
    {title:"Makas", content:"kanat yatay"},
    {title:"Cam", content:"kanat dolgusu"},
    {title:"Pivot karşılığı", content:"kasa dikey"},
    {title:"İspanyolet karşılığı", content:"kasa"},
  ]
  return (
    <div>
      <Accordion list={materials}/>
    </div>
  )
}

export default App;