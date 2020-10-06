import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Background Color 背景颜色</RME>
      <RME alert success>CSS中的background-color属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME bg-color></RME>
<RME bgc-color></RME>
<RME bg={color}></RME>
<RME bgc={color}></RME>
        `} />
      </RME>
      <RME alert info>
        INFO: color可以为内置的颜色系统(primary, secondary, success, danger, warning, info, light, dark,
        white, transparent), 也可以是css可识别的颜色, 如: red, #f00等.
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>bg-color</RME>
        <RME alert danger>NOTE: bg-color, 如果使用的是内置的颜色系统(primary, secondary, success, danger, warning, info, light, dark,
          white, transparent), 为了文本的易读性, color也会跟着调整.</RME>
        <RME p>
          bg-primary, 渲染成: background-color: primary
        </RME>
        <RME mb15 p15 bg-primary>background-color: primary</RME>
        <RME mb15>
          <Code code={`
<RME mb15 p15 bg-primary>background-color: primary</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>bg={'{'}color{'}'}</RME>
        <RME p>
          bg={'{'}red{'}'}, 渲染成: background-color: red
        </RME>
        <RME mb15 p15 bg={'red'}>background-color: red</RME>
        <RME mb15>
          <Code code={`
<RME mb15 p15 bg={'red'}>background-color: red</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>bgc-color</RME>
        <RME alert danger>NOTE: bgc-color, 只改变background-color的值.</RME>
        <RME p>
          bgc-primary, 渲染成: background-color: primary
        </RME>
        <RME mb15 p15 bgc-primary>background-color: primary</RME>
        <RME mb15>
          <Code code={`
<RME mb15 p15 bgc-primary>background-color: primary</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>bgc={'{'}color{'}'}</RME>
        <RME p>
          bgc={'{'}#ff0{'}'}, 渲染成: background-color: #ff0
        </RME>
        <RME mb15 p15 bgc={'#ff0'}>background-color: #ff0</RME>
        <RME mb15>
          <Code code={`
<RME mb15 p15 bgc={'#ff0'}>background-color: #ff0</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}