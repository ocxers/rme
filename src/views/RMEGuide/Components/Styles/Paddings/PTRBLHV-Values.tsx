import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
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
          <li>p={'{"'}h16 v4{'"}'}</li>
          <li>p={'{"'}h16,v4{'"}'}</li>
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
      <RME mb15 b-success p={'h16 v4'}>
        <RME bg-primary>padding: 4px 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success p={'h16 v4'}>
  <RME bg-primary>padding: 4px 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success p={'h16,v4'}>
        <RME bg-primary>padding: 4px 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success p={'h16,v4'}>
  <RME bg-primary>padding: 4px 16px</RME>
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
      <RME>
        <Code code={`
<RME mb15 b-success ph={16}>
  <RME bg-primary>padding-right: 16px; padding-left: 16px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}