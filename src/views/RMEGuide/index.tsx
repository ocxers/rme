import React from 'react'
import RME from 'react-magic-element'
import Header from "./Header"
import Nav from "./Nav"
import Content from "./Content"

export default (props: any) => {
    return (
        <RME>
            <Header />
            <Nav/>
            <Content />
        </RME>
    )
}