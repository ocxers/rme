import React from 'react'
import cx from 'classnames'
import RME from "react-magic-element"

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

export default (props: any) => {
    return (
        <RME layout row h-100>
            <RME nav w240 br={'1px solid red'} p15>Left navigation</RME>
            <RME rest>
                <RME header p15>Header</RME>
                <RME section>Content</RME>
            </RME>
        </RME>
    )
}