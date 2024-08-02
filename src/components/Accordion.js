import { useState } from "react"
import { FcDownLeft, FcDown } from "react-icons/fc";

function Accordion({ list }) {
    const [openedItem, setOpenedItem] = useState(-1)

    const handleTitleClick = (index) => {

        setOpenedItem(current => {
            if (current !== index) {
                return index
            } else {
                return -1
            }
        })


        // if(openedItem!=index){
        //     setOpenedItem(index)
        // }else{
        //     setOpenedItem(-1)
        // }


    }

    const renderedList = list.map((item, index) => {

        const isExpanded = openedItem === index

        const icon = <span className="text-2xl">{isExpanded && <FcDown />}{!isExpanded && <FcDownLeft />}</span>

        return (
            <div key={index}>

                <div className="flex justify-between p-3 bg-gray-50 border-b rounded items-center cursor-pointer" onClick={() => { handleTitleClick(index) }}>{item.title}{icon}</div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return (
        <div>
            list is:
            {renderedList}
        </div>
    )
}

export default Accordion