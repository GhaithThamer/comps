import useNavigation from "../hooks/useNavigation"
import Link from "./Link"

function SideBar(){
    const {currentPath} = useNavigation()
    return(
        <div className="flex">
        <div className ="bg-red-200 pl-10 pr-3 py-5">
            <div>
            <Link className={"bg-red-100 text-red-500"} to="/button" activeClassName="text-green-500 font-bold border-l-4 border-green-500 pl-2">Button</Link>
            <Link  to="/accordion" activeClassName="text-green-500 font-bold border-l-4 border-green-500 pl-2">Accordion</Link>
            <Link  to="/dropdown" activeClassName="text-green-500 font-bold border-l-4 border-green-500 pl-2">Dropdown box</Link>
            <Link  to="/modal" activeClassName="text-green-500 font-bold border-l-4 border-green-500 pl-2">Modal</Link>
            </div>
            {currentPath}
        </div>
        </div>
    )
}

export default SideBar