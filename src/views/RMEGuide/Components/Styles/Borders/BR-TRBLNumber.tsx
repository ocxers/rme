import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>r[-tl+number][-tr+number][-br+number][-bl+number]</RME>
      <RME p>
        r-tl8-bl2, 渲染成: border-top-left-radius: 8px; border-bottom-left-radius: 2px
      </RME>
      <RME mb15 p15 b r-tl8-bl2>border-top-left-radius: 8px; border-bottom-left-radius: 2px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b r-tl8-bl2>border-top-left-radius: 8px; border-bottom-left-radius: 2px</RME>
     `} />
      </RME>
    </RME>
  )
}