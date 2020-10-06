import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>box={'{'}value{'}'}</RME>
      <RME>
        value可以为: <br />
        <ul>
          <li>box={'{'}128{'}'}</li>
          <li>box={'{"'}128 96{'"}'}</li>
          <li>box={'{"'}128,96{'"}'}</li>
          <li>box={'{"'}w128 h96{'"}'}</li>
          <li>box={'{"'}w128,h96{'"}'}</li>
        </ul>
      </RME>
      <RME mb15 b-success box={128}>width: 128px; height: 128px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box={128}>width: 128px; height: 128px</RME>
     `} />
      </RME>
      <RME mb15 b-success box={'128 96'}>width: 128px; height: 96px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box={'128 96'}>width: 128px; height: 96px</RME>
     `} />
      </RME>
      <RME mb15 b-success box={'128,96'}>width: 128px; height: 96px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box={'128,96'}>width: 128px; height: 96px</RME>
     `} />
      </RME>
      <RME mb15 b-success box={'h128 w96'}>width: 96px; height: 128px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box={'h128 w96'}>width: 96px; height: 128px</RME>
     `} />
      </RME>
      <RME mb15 b-success box={'h128,w96'}>width: 96px; height: 128px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success box={'h128,w96'}>width: 96px; height: 128px</RME>
     `} />
      </RME>
    </RME>
  )
}