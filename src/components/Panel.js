
function Panel({className, children, ...rest}){
    return(
        <div {...rest} className={"border rounded p-3 shadow bg-white w-full "+className}>{children}</div>
    )
}

export default Panel;