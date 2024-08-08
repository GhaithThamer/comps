
import { useState } from "react";
import Dropdown from "../components/Dropdown"

function DropdownPage() {

  const [selectedObject, setSelectedObject] = useState({label:"Select", value:"select"})

  const objects = [
    {label:"Aksesuar",value:"aksesuar"},
    {label:"Panel",value:"panel"},
    {label:"Palet",value:"palet"},
  ]

  function handleChange(index){
    setSelectedObject(objects[index]);
}

  

  return (
    <div className="flex m-2">
      <Dropdown objects={objects} onChange={handleChange} value={selectedObject}/>
    </div>
  )
}

export default DropdownPage;