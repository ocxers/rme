import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1>Width</RME>
      <RME alert success>CSS中的width属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME w[number]></RME>
<RME w-number></RME>
<RME w={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>w[number]</RME>
        <RME p>
          渲染成: width: number + px
        </RME>
        <RME mb15>
          <RME p15 bg-primary w480>width: 480px</RME>
        </RME>
        <Code code={`
<RME p15 bg-primary w480>width: 480px</RME>
     `} />
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>w-number</RME>
        <RME p>
          渲染成: width: number + %
        </RME>
        <RME mb15>
          <RME p15 bg-primary w-60>width: 60%</RME>
        </RME>
        <Code code={`
<RME p15 bg-primary w-60>width: 60%</RME>
     `} />
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>w={'{'}value{'}'}</RME>
        <RME p>
          如果value中包含'%', 则渲染成: width: Number.parseInt(value) + %; 否则渲染成: width: Number.parseInt(value) + px
        </RME>
        <RME mb15>
          <RME mb15 p15 bg-primary w={'640px'}>width: 640px</RME>
          <Code code={`
<RME p15 bg-primary w={'640px'}>width=640px</RME>
     `} />
        </RME>
        <RME mb15>
          <RME mb15 p15 bg-primary w={640}>width: 640px</RME>
          <Code code={`
<RME p15 bg-primary w={640}>width=640px</RME>
     `} />
        </RME>
        <RME mb15>
          <RME mb15 p15 bg-primary w={'80%'}>width: 80%</RME>
          <Code code={`
<RME p15 bg-primary w={'80%'}>width: 80%</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}