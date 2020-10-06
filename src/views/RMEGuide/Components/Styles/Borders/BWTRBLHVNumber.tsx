import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>b</RME>
      <RME p>
        b, 渲染成: border: 1px solid. border其它所有的属性都基于该属性.
      </RME>
      <RME mb15 p15 b>border: 1px solid</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b>border: 1px solid</RME>
     `} />
      </RME>
      <RME h3>b[t|r|b|l|h|v]wnumber</RME>
      <RME p>
        其中[t|r|b|l|h|v]为可选. <br />
        如果没有[t|r|b|l|h|v], 如: bw4, 渲染成: border-width: 4px <br />
      </RME>
      <RME mb15 p15 b bw4>border-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw4>border-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        btw4, 渲染成: border-top-width: 4px <br />
      </RME>
      <RME mb15 p15 b btw4>border-top-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b btw4>border-top-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        bhw4, 渲染成: border-right-width: 4px; border-left-width: 4px
      </RME>
      <RME mb15 p15 b bhw4>border-right-width: 4px; border-left-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bhw4>border-right-width: 4px; border-left-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        bvw4, 渲染成: border-top-width: 4px; border-bottom-width: 4px
      </RME>
      <RME mb15 p15 b bvw4>border-top-width: 4px; border-bottom-width: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bvw4>border-top-width: 4px; border-bottom-width: 4px</RME>
     `} />
      </RME>
      <RME p>
        组合
      </RME>
      <RME mb15 p15 b bw4 bvw6 bhw2 btw8 blw0>border-width: 8px 2px 6px 0px</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b bw4 bvw6 bhw2 btw8 blw0>border-width: 8px 2px 6px 0px</RME>
     `} />
      </RME>
    </RME>
  )
}