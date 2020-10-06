import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>box-[width number]-[height number]</RME>
      <RME mb15 b-success box-128-96>width: 128px; height: 96px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box-128-96>width: 128px; height: 96px</RME>
     `} />
      </RME>
      <RME mb15 b-success box--96>height: 96px</RME>
      <RME>
        <Code code={`
<RME mb15 b-success box--96>height: 96px</RME>
     `} />
      </RME>
    </RME>
  )
}