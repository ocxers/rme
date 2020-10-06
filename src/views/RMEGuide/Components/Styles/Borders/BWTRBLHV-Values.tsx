import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>b[t|r|b|l|h|v]w={'{'}value{'}'}</RME>
      <RME>
        如果没有[t|r|b|l|h|v], value可以为: <br />
        <ul>
          <li>bw={'{'}8{'}'}</li>
          <li>bw={'{"'}8 6 4 2{'"}'}</li>
          <li>bw={'{"'}8,6,4,2{'"}'}</li>
          <li>bw={'{"'}8,,,2{'"}'}</li>
          <li>bw={'{"'}t8 r6 b4 l2{'"}'}</li>
          <li>bw={'{"'}t8 l2{'"}'}</li>
          <li>bw={'{"'}t8,r6,b4,l2{'"}'}</li>
          <li>bw={'{"'}t8,l2{'"}'}</li>
          <li>bw={'{"'}h8 v2{'"}'}</li>
          <li>bw={'{"'}h8,v2{'"}'}</li>
        </ul>
      </RME>
      <RME mb15 p15 b bw={8}>border-width: 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={8}>border-width: 8px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'8 6 4 2'}>border-width: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'8 6 4 2'}>border-width: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'8,6,4,2'}>border-width: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'8,6,4,2'}>border-width: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'8,,,2'}>border-top-width: 8px; border-left-width: 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'8,,,2'}>border-top-width: 8px; border-left-width: 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'t8 r6 b4 l2'}>border-width: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'t8 r6 b4 l2'}>border-width: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'t8 l2'}>border-top-width: 8px; border-left-width: 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'t8 l2'}>border-top-width: 8px; border-left-width: 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'t8,r6,b4,l2'}>border-width: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'t8,r6,b4,l2'}>border-width: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'t8,l2'}>border-top-width: 8px; border-left-width: 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'t8,l2'}>border-top-width: 8px; border-left-width: 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'h8 v2'}>border-width: 2px 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'h8 v2'}>border-width: 2px 8px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bw={'h8,v2'}>border-width: 2px 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bw={'h8,v2'}>border-width: 2px 8px</RME>
     `} />
      </RME>
      <RME mb15>
        如果有[t|r|b|l|h|v], value为number
      </RME>
      <RME mb15 p15 b btw={8}>border-top-width: 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b btw={8}>border-top-width: 8px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bhw={8}>border-right-width: 8px; border-left-width: 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bhw={8}>border-right-width: 8px; border-left-width: 8px</RME>
     `} />
      </RME>
    </RME>
  )
}