import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>FontSize</RME>
      <RME alert success>CSS中的font-size属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME fsnumber></RME>
<RME fs={number}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>fsnumber</RME>
        <RME p>
          fs12, 渲染成: font-size: 12px
        </RME>
        <RME mb15 p15 b-success fs12>font-size: 12px</RME>
        <RME>
          <Code code={`
<RME mb15 p15 b-success fs12>font-size: 12px</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>fs={'{'}number{'}'}</RME>
        <RME p>
          fs={'{'}72{'}'}, 渲染成: font-size: 72px
        </RME>
        <RME mb15 p15 b-success fs={72}>font-size: 72px</RME>
        <RME>
          <Code code={`
<RME mb15 p15 b-success fs={72}>font-size: 72px</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}