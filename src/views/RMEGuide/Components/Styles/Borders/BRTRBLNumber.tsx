import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>r[tl|bl|tr|br]number</RME>
      <RME p>
        其中[tl|bl|tr|br]为可选. <br />
        如果没有[tl|bl|tr|br], 如: r4, 渲染成: border-radius: 4px <br />
      </RME>
      <RME mb15 p15 b r4>border-radius: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r4>border-radius: 4px</RME>
     `} />
      </RME>
      <RME mb15 p15 b rtl4>border-top-left-radius: 4px</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b rtl4>border-top-left-radius: 4px</RME>
     `} />
      </RME>
      <RME p>
        组合
      </RME>
      <RME mb15 p15 b r4 rtl16 rtr12 rbr8>border-radius: 16px 12px 8px 4px</RME>
      <RME>
        <Code code={`
<RME p15 b r4 rtl16 rtr12 rbr8>border-radius: 16px 12px 8px 4px</RME>
     `} />
      </RME>
    </RME>
  )
}