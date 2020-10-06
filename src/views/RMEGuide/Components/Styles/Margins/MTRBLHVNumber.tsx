import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>m[t|r|b|l|h|v]number</RME>
        <RME p>
          其中[t|r|b|l|h|v]为可选. <br />
          如果没有[t|r|b|l|h|v], 如: m16, 渲染成: margin: 16px <br />
        </RME>
        <RME mb15 b-success>
          <RME bg-primary m16>margin: 16px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success>
  <RME bg-primary m16>margin: 16px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          mt16, 渲染成: margin-top: 16px <br />
        </RME>
        <RME mb15 b-success>
          <RME bg-primary mt16>margin-top: 16px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success>
  <RME bg-primary mt16>margin-top: 16px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          mh16, 渲染成: margin-right: 16px; margin-left: 16px
        </RME>
        <RME mb15 b-success>
          <RME bg-primary mh16>margin-right: 16px; margin-left: 16px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success>
  <RME bg-primary mh16>margin-right: 16px; margin-left: 16px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          mv16, 渲染成: margin-top: 16px; margin-bottom: 16px
        </RME>
        <RME mb15 b-success>
          <RME bg-primary mv16>margin-top: 16px; margin-bottom: 16px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success>
  <RME bg-primary mv16>margin-top: 16px; margin-bottom: 16px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          组合
        </RME>
        <RME mb15 b-success>
          <RME bg-primary m16 mv12 mh8 mt4 ml1>margin: 4px 8px 12px 1px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success>
  <RME bg-primary m16 mv12 mh8 mt4 ml1>margin: 4px 8px 12px 1px</RME>
</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}