import { useEffect, useState, useRef } from "react"
import { FcDownLeft, FcDown } from "react-icons/fc";
import Panel from "./Panel";

function Dropdown({ objects, onChange, value }) {
    // console.log("rendered")

    const [islistVisible, setIsListVisible] = useState(false)

    const handleDocumentClick = (event) => {
        // console.log(dropdown)

        if (!dropdown.current) { return }

        if (!dropdown.current.contains(event.target)) {
            // console.log("clicked outside the dropdown")
            setIsListVisible(false)
        } else {
            // console.log("clicked inside the dropdown")
        }

    }

    const dropdown = useRef();


    useEffect(() => {
        document.addEventListener('click', handleDocumentClick, true)
        return (() => {
            document.removeEventListener('click', handleDocumentClick, true)
        })
    }, [])

    const handleChange = (index) => {
        onChange(index);
        setIsListVisible(false)
    }

    const renderedItems = objects.map((object, index) => {
        return (
            <div key={index} className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => { handleChange(index) }}>{object.value}</div>
        )
    })

    const icon = islistVisible ? <FcDown /> : <FcDownLeft />

    return (
        <div ref={dropdown} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={() => { setIsListVisible(!islistVisible) }}>{value.value}{icon}</Panel>
            {islistVisible && <Panel className="absolute top-full">{renderedItems}</Panel>}
        </div>
    )
}


export default Dropdown