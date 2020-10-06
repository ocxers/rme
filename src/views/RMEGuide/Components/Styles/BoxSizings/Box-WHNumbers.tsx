import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>box[-w+number][-h+number]</RME>
      <RME mb15 b-success box-h128-w96>width: 96px; height: 128px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box-h128-w96>width: 96px; height: 128px</RME>
     `} />
      </RME>
      <RME mb15 b-success box-w256>width: 256px</RME>
      <RME>
        <Code code={`
<RME mb15 b-success box-w256>width: 256px</RME>
     `} />
      </RME>
    </RME>
  )
}