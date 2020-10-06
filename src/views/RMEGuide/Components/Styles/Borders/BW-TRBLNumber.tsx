import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>bw[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]</RME>
      <RME p>
        bw-t8-l2, 渲染成: border-top-width: 8px; border-left-width: 2px
      </RME>
      <RME mb15 p15 b bw-t8-l2>border-top-width: 8px; border-left-width: 2px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b bw-t8-l2>border-top-width: 8px; border-left-width: 2px</RME>
     `} />
      </RME>
      <RME p>
        bw-h8-v2, 渲染成: border-width: 2px 8px
      </RME>
      <RME mb15 p15 b bw-h8-v2>border-width: 2px 8px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b bw-h8-v2>border-width: 2px 8px</RME>
     `} />
      </RME>
    </RME>
  )
}