import React from 'react'
import RME  from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>FontWeight</RME>
      <RME alert success>CSS中的font-weight属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb15>
        <Code code={`
<RME fwnumber></RME>
<RME fw={number}></RME>
        `} />
      </RME>
      <RME alert danger>NOTE: number取值在100 ~ 900之间.</RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>fwnumber</RME>
        <RME p>
          fw100, 渲染成: font-weight: 100
        </RME>
        <RME mb15 p15 b-success fw100>font-weight: 100</RME>
        <RME>
          <Code code={`
<RME mb15 p15 b-success fw100>font-weight: 100</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>fw={'{'}number{'}'}</RME>
        <RME p>
          fw={'{'}700{'}'}, 渲染成: font-weight: 700
        </RME>
        <RME mb15 p15 b-success fw={700}>font-weight: 700</RME>
        <RME>
          <Code code={`
<RME mb15 p15 b-success fw={700}>font-weight: 700</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}