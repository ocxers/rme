import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>p[t|r|b|l|h|v]-number</RME>
      <RME p>
        其中[t|r|b|l|h|v]为可选. <br />
        如果没有[t|r|b|l|h|v], 如: p-16, 渲染成: padding: 16px <br />
      </RME>
      <RME mb15 b-success p-16>
        <RME bg-primary>padding: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success p-16>
  <RME bg-primary>padding: 16px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        pt-16, 渲染成: padding-top: 16px <br />
      </RME>
      <RME mb15 b-success pt-16>
        <RME bg-primary>padding-top: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success pt-16>
  <RME bg-primary>padding-top: 16px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        ph-16, 渲染成: padding-right: 16px; padding-left: 16px
      </RME>
      <RME mb15 b-success ph-16>
        <RME bg-primary>padding-right: 16px; padding-left: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success ph-16>
  <RME bg-primary>padding-right: 16px; padding-left: 16px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        pv-16, 渲染成: padding-top: 16px; padding-bottom: 16px
      </RME>
      <RME mb15 b-success pv-16>
        <RME bg-primary>padding-top: 16px; padding-bottom: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success pv-16>
  <RME bg-primary>padding-top: 16px; padding-bottom: 16px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        组合
      </RME>
      <RME mb15 b-success p-16 pv-12 ph-8 pt-4 pl-1>
        <RME bg-primary>padding: 4px 8px 12px 1px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success p-16 pv-12 ph-8 pt-4 pl-1>
  <RME bg-primary>padding: 4px 8px 12px 1px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}