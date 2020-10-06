import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>bw-[top number]-[right number]-[bottom number]-[left number]</RME>
      <RME p>
        bw-8-6-4-2, 渲染成: border-width: 8px 6px 4px 2px
      </RME>
      <RME mb15 p15 b bw-8-6-4-2>border-width: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw-8-6-4-2>border-width: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME p>
        bw-8---2, 渲染成: border-top-width: 8px; border-left-width: 2px
      </RME>
      <RME mb15 p15 b bw-8---2>border-top-width: 8px; border-left-width: 2px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b bw-8---2>border-top-width: 8px; border-left-width: 2px</RME>
     `} />
      </RME>
    </RME>
  )
}