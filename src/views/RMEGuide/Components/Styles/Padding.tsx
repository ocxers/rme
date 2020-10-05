import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Padding</RME>
      <RME alert success>CSS中的padding属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <ul>
          <li>p[number]: <RME span primary>p15</RME></li>
          <li>p-[top number]-[right number]-[bottom number]-[left number]: <RME span primary>p-15---10</RME></li>
          <li>p-[t+number]-[r+number]-[b+number]-[l+number]: <RME span primary>p-t15-l10</RME></li>
          <li>p={'{'}number{'}'}: <RME span primary>p={'{'}15{'}'}</RME></li>
          <li>p={'{'}[number] [number] [number] [number]{'}'}: <RME span primary>p={'{"'}15 10 15 10{'"}'}</RME></li>
          <li>p={'{'}[number],[number],[number],[number]{'}'}: <RME span primary>p={'{"'}15,,,10{'"}'}</RME></li>
          <li>p={'{'}[t+number] [r+number] [b+number] [l+number]{'}'}: <RME span primary>p={'{"'}t15 l10{'"}'}</RME>
          </li>
          <li>p={'{'}[t+number],[r+number],[b+number],[l+number]{'}'}: <RME span primary>p={'{"'}t15,l10{'"}'}</RME>
          </li>
          <li>p[t/r/b/l][number]: <RME span primary>pr15</RME></li>
          <li>p[t/r/b/l]-number-: <RME span primary>pr15</RME></li>
          <li>p[t/r/b/l]={'{'}number{'}'}: <RME span primary>pr={'{'}15{'}'}</RME></li>
        </ul>
        <Code code={`
<RME p[t|r|b|l|h|v]number></RME>
<RME p[t|r|b|l|h|v]-number></RME>
<RME p-[top number]-[right number]-[bottom number]-[left number]></RME>
<RME p[-t+number][-r+number][-b+number][-l+number]></RME>
<RME p[t|r|b|l|h|v]={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>p[t|r|b|l]number</RME>
        <RME p>
          其中[t|r|b|l]为可选. <br />
          如果没有[t|r|b|l], 如: p15, 渲染成: padding: number + px <br />
        </RME>
        <RME mb15 b-success p15>
          <RME bg-primary>padding: 15px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p15>
  <RME bg-primary>padding: 15px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          pt15, 渲染成: padding-top: number + px <br />
        </RME>
        <RME mb15 b-success pt15>
          <RME bg-primary>padding-top: 15px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success pt15>
  <RME bg-primary>padding-top: 15px</RME>
</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>p[t|r|b|l]-number</RME>
        <RME p>
          其中[t|r|b|l]为可选. <br />
          如果没有[t|r|b|l], 如: p-16, 渲染成: padding: 16px <br />
        </RME>
        <RME mb15 b-success p-16>
          <RME bg-primary>padding: 16px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p16>
  <RME bg-primary>padding: 16px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          pt16, 渲染成: padding-top: 16px <br />
        </RME>
        <RME mb15 b-success pt16>
          <RME bg-primary>padding-top: 16px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success pt16>
  <RME bg-primary>padding-top: 16px</RME>
</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>p-[top number]-[right number]-[bottom number]-[left number]</RME>
        <RME p>
          p-16-12-8-4, 渲染成: padding: 16px 12px 8px 4px
        </RME>
        <RME mb15 b-success p-16-12-8-4>
          <RME bg-primary>padding: 16px 12px 8px 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p-16-12-8-4>
  <RME bg-primary>padding: 16px 12px 8px 4px</RME>
</RME>
     `} />
        </RME>
        <RME p>
          p-16---4, 渲染成: padding-top: 16px; padding-left: 4px <br />
        </RME>
        <RME mb15 b-success p-16---4>
          <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
        </RME>
        <RME>
          <Code code={`
<RME mb15 b-success p-16---4>
  <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>p[-t+number][-r+number][-b+number][-l+number]</RME>
        <RME p>
          p-t16-l12, 渲染成: padding-top: 16px; padding-left: 12px
        </RME>
        <RME mb15 b-success p-t16-l12>
          <RME bg-primary>padding-top: 16px; padding-left: 12px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p-t16-l12>
  <RME bg-primary>padding-top: 16px; padding-left: 12px</RME>
</RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>p[t|r|b|l|h|v]={'{'}value{'}'}</RME>
        <RME>
          如果没有[t|r|b|l|h|v], value可以为: <br />
          <ul>
            <li>p={'{'}16{'}'}</li>
            <li>p={'{"'}16 12 8 4{'"}'}</li>
            <li>p={'{"'}16,12,8,4{'"}'}</li>
            <li>p={'{"'}16,,,4{'"}'}</li>
            <li>p={'{"'}t16 r12 b8 l4{'"}'}</li>
            <li>p={'{"'}t16 l4{'"}'}</li>
            <li>p={'{"'}t16,r12,b8,l4{'"}'}</li>
            <li>p={'{"'}t16,l4{'"}'}</li>
          </ul>
        </RME>
        <RME mb15 b-success p={16}>
          <RME bg-primary>padding: 16px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={16}>
  <RME bg-primary>padding: 16px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'16 12 8 4'}>
          <RME bg-primary>padding: 16px 12px 8px 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'16 12 8 4'}>
  <RME bg-primary>padding: 16px 12px 8px 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'16,12,8,4'}>
          <RME bg-primary>padding: 16px 12px 8px 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'16,12,8,4'}>
  <RME bg-primary>padding: 16px 12px 8px 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'16,,,4'}>
          <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'16,,,4'}>
  <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'t16 r12 b8 l4'}>
          <RME bg-primary>padding: 16px 12px 8px 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'t16 r12 b8 l4'}>
  <RME bg-primary>padding: 16px 12px 8px 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'t16 l4'}>
          <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'t16 l4'}>
  <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'t16,r12,b8,l4'}>
          <RME bg-primary>padding: 16px 12px 8px 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'t16,r12,b8,l4'}>
  <RME bg-primary>padding: 16px 12px 8px 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success p={'t16,l4'}>
          <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success p={'t16,l4'}>
  <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
</RME>
     `} />
        </RME>
        <RME mb15>
          如果有[t|r|b|l|h|v], value为number
        </RME>
        <RME mb15 b-success pt={16}>
          <RME bg-primary>padding-top: 16px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success pt={16}>
  <RME bg-primary>padding-top: 16px</RME>
</RME>
     `} />
        </RME>
        <RME mb15 b-success ph={16}>
          <RME bg-primary>padding-right: 16px; padding-left: 16px</RME>
        </RME>
        <RME mb15>
          <Code code={`
<RME mb15 b-success ph={16}>
  <RME bg-primary>padding-right: 16px; padding-left: 16px</RME>
</RME>
     `} />
        </RME>
      </RME>
    </RME>
  )
}