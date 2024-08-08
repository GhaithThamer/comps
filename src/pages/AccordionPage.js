// import React from "react";
import Accordion from "../components/Accordion"

function AccordionPage() {
  const materials =[
    {title:"İspanyolet", content:"kanat dikey"},
    {title:"Makas", content:"kanat yatay"},
    {title:"Cam", content:"kanat dolgusu"},
    {title:"Pivot karşılığı", content:"kasa dikey"},
    {title:"İspanyolet karşılığı", content:"kasa"},
  ]
  return (
    <div className="m-2">
      <Accordion list={materials}/>
    </div>
  )
}

export default AccordionPage;