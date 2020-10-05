import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Height</RME>
      <RME alert success>CSS中的height属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME h[number]></RME>
<RME h-number></RME>
<RME h={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>h[number]</RME>
        <RME p>
          渲染成: height: number + px
        </RME>
        <RME mb15>
          <RME p15 bg-primary h64>height: 64px</RME>
        </RME>
        <Code code={`
<RME p15 bg-primary h64>height: 64px</RME>
     `} />
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>h-number</RME>
        <RME p>
          渲染成: height: number + %
        </RME>
        <RME h240 mb15 b-success>
          <RME h-64 bg-primary>height: 64%</RME>
        </RME>
        <Code code={`
<RME h128 b-success>
  <RME h-64 bg-primary>height: 64%</RME>
</RME>
     `} />
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>h={'{'}value{'}'}</RME>
        <RME p>
          如果value中包含'%', 则渲染成: height: Number.parseInt(value) + %; 否则渲染成: height: Number.parseInt(value) + px
        </RME>
        <RME mb15>
          <RME mb15 p15 bg-primary h={'64px'}>height: 64px</RME>
          <Code code={`
<RME p15 bg-primary h={'64px'}>height=64px</RME>
     `} />
        </RME>
        <RME mb15>
          <RME mb15 p15 bg-primary h={64}>height: 64px</RME>
          <Code code={`
<RME p15 bg-primary h={64}>height=64px</RME>
     `} />
        </RME>
        <RME mb15>
          <RME h128 mb15 b-success>
            <RME p15 bg-primary h={'80%'}>height: 80%</RME>
          </RME>
          <Code code={`
<RME h128 b-success>
  <RME p15 bg-primary h={'80%'}>height: 80%</RME>
</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}