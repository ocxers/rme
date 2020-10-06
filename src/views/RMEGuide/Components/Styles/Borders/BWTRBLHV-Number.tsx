import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>b[t|r|b|l|h|v]w-number</RME>
      <RME p>
        其中[t|r|b|l|h|v]为可选. <br />
        如果没有[t|r|b|l|h|v], 如: bw-4, 渲染成: border-width: 4px <br />
      </RME>
      <RME mb15 p15 b bw-4>border-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw-4>border-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        btw-4, 渲染成: padding-top: 4px <br />
      </RME>
      <RME mb15 p15 b btw-4>border-top-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b btw-4>border-top-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        bhw-4, 渲染成: border-right-width: 4px; border-left-width: 4px
      </RME>
      <RME mb15 p15 b bhw-4>border-right-width: 4px; border-left-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bhw-4>border-right-width: 4px; border-left-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        bvw-4, 渲染成: border-top-width: 4px; border-bottom-width: 4px
      </RME>
      <RME mb15 p15 b bvw-4>border-top-width: 4px; border-bottom-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bvw-4>border-top-width: 4px; border-bottom-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        组合
      </RME>
      <RME mb15 p15 b bw-4 bvw-6 bhw-2 btw-8 blw-0>border-width: 8px 2px 6px 0px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b bw-4 bvw-6 bhw-2 btw-8 blw-0>border-width: 8px 2px 6px 0px</RME>
     `} />
      </RME>
    </RME>
  )
}