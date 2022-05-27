import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
            <h1 title="main heading" className="header">{title}</h1>
            {/* <h3 title="sub heading" className="header" data-testid="testthis">Some Subheading</h3> */}
        </>
    )
    
}
