import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1>Width</RME>
      <RME mb30>
        <Code code={`
<RME b w1024>width=1024px</RME>
<RME b w={'80px'}>width=80px</RME>
<RME b w-80>width=80%</RME>
<RME b w={'80%'}>width=80%</RME>
     `} />
      </RME>
      <RME b-primary fc={'white'}>
        <RME mb10 p15 bgc-primary w480>width=480px</RME>
        <RME mb10 p15 bgc-danger w={'640px'}>width=640px</RME>
        <RME mb10 p15 bgc-primary w-60>width=60%</RME>
        <RME mb10 p15 bgc-danger w={'80%'}>width=80%</RME>
      </RME>
    </RME>
  )
}