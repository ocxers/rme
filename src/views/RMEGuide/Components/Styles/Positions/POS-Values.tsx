import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>pos={'{'}value{'}'}</RME>
      <RME>
        value可以为: <br />
        <ul>
          <li>pos={'{'}16{'}'}</li>
          <li>pos={'{"'}16 12 8 4{'"}'}</li>
          <li>pos={'{"'}16,12,8,4{'"}'}</li>
          <li>pos={'{"'}16,,,4{'"}'}</li>
          <li>pos={'{"'}t16 r12 b8 l4{'"}'}</li>
          <li>pos={'{"'}t16 l4{'"}'}</li>
          <li>pos={'{"'}t16,r12,b8,l4{'"}'}</li>
          <li>pos={'{"'}t16,l4{'"}'}</li>
          <li>pos={'{"'}h16 v4{'"}'}</li>
          <li>pos={'{"'}h16,v4{'"}'}</li>
        </ul>
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={16}>top: 16px; right: 16px; bottom: 16px; left: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={16}>top: 16px; right: 16px; bottom: 16px; left: 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'16 12 8 4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'16 12 8 4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'16,12,8,4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'16,12,8,4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'16,,,4'}>top: 16px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'16,,,4'}>top: 16px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'t16 r12 b8 l4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'t16 r12 b8 l4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'t16 l4'}>top: 16px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'t16 l4'}>top: 16px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'t16,r12,b8,l4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'t16,r12,b8,l4'}>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'t16,l4'}>top: 16px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'t16,l4'}>top: 16px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'h16 v4'}>top: 4px; right: 16px; bottom: 4px; left: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'h16 v4'}>top: 4px; right: 16px; bottom: 4px; left: 16px</RME>
</RME>
     `} />
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary absolute pos={'h16,v4'}>top: 4px; right: 16px; bottom: 4px; left: 16px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary absolute pos={'h16,v4'}>top: 4px; right: 16px; bottom: 4px; left: 16px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}