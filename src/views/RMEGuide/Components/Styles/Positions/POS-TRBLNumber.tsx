import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>pos[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]</RME>
      <RME p>
        pos-t16-l12, 渲染成: top: 16px; left: 12px
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary box-h64 absolute pos-t16-l12>top: 16px; left: 12px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary box-h64 absolute pos-t16-l12>top: 16px; left: 12px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        pos-h16-v12, 渲染成: top: 12px; right: 16px; bottom: 12px; left: 16px
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary box-h64 absolute pos-h16-v12>top: 12px; right: 16px; bottom: 12px; left: 16px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary box-h64 absolute pos-h16-v12>top: 12px; right: 16px; bottom: 12px; left: 16px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}