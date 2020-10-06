import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>p[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]</RME>
      <RME p>
        p-t16-l12, 渲染成: padding-top: 16px; padding-left: 12px
      </RME>
      <RME mb15 b-success p-t16-l12>
        <RME bg-primary>padding-top: 16px; padding-left: 12px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success p-t16-l12>
  <RME bg-primary>padding-top: 16px; padding-left: 12px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        p-h16-v12, 渲染成: padding: 12px 16px
      </RME>
      <RME mb15 b-success p-h16-v12>
        <RME bg-primary>padding: 12px 16px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success p-h16-v12>
  <RME bg-primary>padding: 12px 16px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}