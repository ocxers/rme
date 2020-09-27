import React from 'react'
import RME from 'react-magic-element'

export default (props: any) => {
    return (
        <RME layout row h-100>
            <RME left-nav w240 bgc-danger>Left nav bar</RME>
            <RME rest>
                <RME header p15>Header</RME>
                <RME w-100 bgc-primary>content</RME>
            </RME>
        </RME>
    )
}