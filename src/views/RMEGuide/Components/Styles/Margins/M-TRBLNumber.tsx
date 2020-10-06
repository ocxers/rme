import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'
import MTRBLHVNumber from './MTRBLHVNumber'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>m[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]</RME>
      <RME p>
        m-t16-l12, 渲染成: margin-top: 16px; margin-left: 12px
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m-t16-l12>margin-top: 16px; margin-left: 12px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m-t16-l12>margin-top: 16px; margin-left: 12px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        m-h16-v12, 渲染成: margin: 12px 16px
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m-h16-v12>margin: 12px 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m-h16-v12>margin: 12px 16px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}