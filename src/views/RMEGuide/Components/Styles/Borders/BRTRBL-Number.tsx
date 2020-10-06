import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>r[tl|bl|tr|br]-number</RME>
      <RME p>
        其中[tl|bl|tr|br]为可选. <br />
        如果没有[tl|bl|tr|br], 如: r-4, 渲染成: border-radius: 4%
      </RME>
      <RME mb15 p15 b r-4>border-radius: 4%</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b r-4>border-radius: 4%</RME>
     `} />
      </RME>
      <RME mb15 p15 b rtl-4>border-top-left-radius: 4%</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b rtl-4>border-top-left-radius: 4%</RME>
     `} />
      </RME>
      <RME p>
        组合
      </RME>
      <RME mb15 p15 b r-4 rtl-16 rtr-12 rbr-8>border-radius: 16% 12% 8% 4%</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b r-4 rtl-16 rtr-12 rbr-8>border-radius: 16% 12% 8% 4%</RME>
     `} />
      </RME>
    </RME>
  )
}