import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'
import MTRBLHVNumber from './MTRBLHVNumber'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>m[t|r|b|l|h|v]={'{'}value{'}'}</RME>
      <RME>
        如果没有[t|r|b|l|h|v], value可以为: <br />
        <ul>
          <li>m={'{'}16{'}'}</li>
          <li>m={'{"'}16 12 8 4{'"}'}</li>
          <li>m={'{"'}16,12,8,4{'"}'}</li>
          <li>m={'{"'}16,,,4{'"}'}</li>
          <li>m={'{"'}t16 r12 b8 l4{'"}'}</li>
          <li>m={'{"'}t16 l4{'"}'}</li>
          <li>m={'{"'}t16,r12,b8,l4{'"}'}</li>
          <li>m={'{"'}t16,l4{'"}'}</li>
          <li>m={'{"'}h16 v4{'"}'}</li>
          <li>m={'{"'}h16,v4{'"}'}</li>
        </ul>
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={16}>margin: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={16}>margin: 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'16 12 8 4'}>margin: 16px 12px 8px 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'16 12 8 4'}>margin: 16px 12px 8px 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'16,12,8,4'}>margin: 16px 12px 8px 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'16,12,8,4'}>margin: 16px 12px 8px 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'16,,,4'}>margin-top: 16px; margin-left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'16,,,4'}>margin-top: 16px; margin-left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'t16 r12 b8 l4'}>margin: 16px 12px 8px 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'t16 r12 b8 l4'}>margin: 16px 12px 8px 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'t16 l4'}>margin-top: 16px; margin-left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'t16 l4'}>margin-top: 16px; margin-left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'t16,r12,b8,l4'}>margin: 16px 12px 8px 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'t16,r12,b8,l4'}>margin: 16px 12px 8px 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'t16,l4'}>margin-top: 16px; margin-left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'t16,l4'}>margin-top: 16px; margin-left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'h16 v4'}>margin: 4px 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'h16 v4'}>margin: 4px 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m={'h16,v4'}>margin: 4px 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m={'h16,v4'}>margin: 4px 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15>
        如果有[t|r|b|l|h|v], value为number
      </RME>
      <RME mb15 b-success>
        <RME bg-primary mt={16}>margin-top: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary mt={16}>margin-top: 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary mh={16}>margin-right: 16px; margin-left: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary mh={16}>margin-right: 16px; margin-left: 16px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}