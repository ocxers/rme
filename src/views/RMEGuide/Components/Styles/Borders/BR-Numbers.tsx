import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>r-[top left number]-[top right number]-[bottom right number]-[bottom left number]</RME>
      <RME p>
        r-8-6-4-2, 渲染成: border-radius: 8px 6px 4px 2px
      </RME>
      <RME mb15 p15 b r-8-6-4-2>border-radius: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r-8-6-4-2>border-radius: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME p>
        r-8---2, 渲染成: border-top-left-radius: 8px; border-bottom-left-radius: 2px
      </RME>
      <RME mb15 p15 b r-8---2>border-top-left-radius: 8px; border-bottom-left-radius: 2px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b r-8---2>border-top-left-radius: 8px; border-bottom-left-radius: 2px</RME>
     `} />
      </RME>
    </RME>
  )
}