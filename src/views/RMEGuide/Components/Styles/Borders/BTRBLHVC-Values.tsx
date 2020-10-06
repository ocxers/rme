import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>b[t|r|b|l|h|v]c={'{'}value{'}'}</RME>
      <RME>
        如果没有[t|r|b|l|h|v], value可以为: <br />
        <ul>
          <li>bc={'{'}primary{'}'}</li>
          <li>bc={'{"'}primary secondary success danger{'"}'}</li>
          <li>bc={'{"'}primary,secondary,success,danger{'"}'}</li>
          <li>bc={'{"'}primary,,,danger{'"}'}</li>
        </ul>
      </RME>
      <RME mb15 p15 b bc={'primary'}>border-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc={'primary'}>border-color: primary</RME>
     `} />
      </RME>
      <RME mb15 p15 b bc={'primary secondary success danger'}>border-color: primary secondary success danger</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc={'primary secondary success danger'}>border-color: primary secondary success danger</RME>
     `} />
      </RME>
      <RME mb15 p15 b bc={'primary,secondary,success,danger'}>border-width: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc={'primary,secondary,success,danger'}>border-width: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b bc={'primary,,,danger'}>border-top-color: primary; border-left-color: danger</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc={'primary,,,danger'}>border-top-color: primary; border-left-color: danger</RME>
     `} />
      </RME>
      <RME mb15>
        如果有[t|r|b|l|h|v], value为color值
      </RME>
      <RME mb15 p15 b btc={'primary'}>border-top-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b btc={'primary'}>border-top-color: primary</RME>
     `} />
      </RME>
      <RME mb15 p15 b bhc={'danger'}>border-right-color: danger; border-left-color: danger</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bhc={'danger'}>border-right-color: danger; border-left-color: danger</RME>
     `} />
      </RME>
      <RME mb15 p15 b bvc={'danger'}>border-top-color: danger; border-bottom-color: danger</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bvc={'danger'}>border-top-color: danger; border-bottom-color: danger</RME>
     `} />
      </RME>
    </RME>
  )
}