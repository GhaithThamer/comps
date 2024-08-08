
import useNavigation from "../hooks/useNavigation"



function Route({path, children}){
    const{currentPath}=useNavigation()
    console.log("currentPath ",currentPath)
    console.log("path ", path)
    return(
        currentPath===path && <div>{children}</div>
        
    )
}

export default Route