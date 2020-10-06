import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>r[tl|bl|tr|br]={'{'}value{'}'}</RME>
      <RME>
        如果没有[tl|bl|tr|br], value可以为: <br />
        <ul>
          <li>r={'{'}8{'}'}</li>
          <li>r={'{"'}8 6 4 2{'"}'}</li>
          <li>r={'{"'}8,6,4,2{'"}'}</li>
          <li>r={'{"'}8,,,2{'"}'}</li>
        </ul>
      </RME>
      <RME mb15 p15 b r={8}>border-radius: 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r={8}>border-radius: 8px</RME>
     `} />
      </RME>
      <RME mb15 p15 b r={'8 6 4 2'}>border-radius: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r={'8 6 4 2'}>border-radius: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b r={'8,6,4,2'}>border-radius: 8px 6px 4px 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r={'8,6,4,2'}>border-radius: 8px 6px 4px 2px</RME>
     `} />
      </RME>
      <RME mb15 p15 b r={'8,,,2'}>border-top-left-radius: 8px; border-bottom-left-radius: 2px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r={'8,,,2'}>border-top-left-radius: 8px; border-bottom-left-radius: 2px</RME>
     `} />
      </RME>
      <RME mb15>
        如果有[tl|bl|tr|br], value为number
      </RME>
      <RME mb15 p15 b rtl={8} id={'abc'} name={'ddd'} class={'abc'}>border-top-left-radius: 8px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b rtl={8}>border-top-left-radius: 8px</RME>
     `} />
      </RME>
    </RME>
  )
}