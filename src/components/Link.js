

import { twMerge } from "tailwind-merge"
import useNavigation from "../hooks/useNavigation"

function Link({to, children, className, activeClassName, ...rest }) {

    const {currentPath, navigate} = useNavigation()

    const handleClick = (event) => {
        event.preventDefault()

        navigate(to)


        // window.history.pushState({}, "", href)
        // console.log(window.location.pathname)
    }

    let activeLink = ""
    if (currentPath === to){
        activeLink = " "+activeClassName+" "
    }


    return (
        <div>
            <a href={to} onClick={(event) => { handleClick(event) }}  {...rest} className={twMerge(" text-blue-700 underline " + className + activeLink)} >{children}</a>
        </div>
    )
}

export default Link