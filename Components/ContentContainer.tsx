import React, { Children } from "react"

export default ({children} : React.PropsWithChildren<{}>) => {
    return <div style={{display: "flex", flexDirection: "column", padding: 10}}>
        {children}
    </div>
}