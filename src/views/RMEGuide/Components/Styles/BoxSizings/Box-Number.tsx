import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>box-number</RME>
      <RME mb15 b-success box-128>width: 128px; height: 128px</RME>
      <RME>
        <Code code={`
<RME mb15 b-success box-128>width: 128px; height: 128px</RME>
     `} />
      </RME>
    </RME>
  )
}