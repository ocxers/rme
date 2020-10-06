import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>Alignment</RME>
      <RME p>
        网格对齐方式: Left, Center, Right
      </RME>
      <RME w-100 mb15 p15 b>
        <RME w-100 row b p15 center h100 mb15>
          <RME bgc-primary w100 h60>Center</RME>
        </RME>
        <RME w-100 row b p15 left h100 mb15>
          <RME bgc-primary w100 h60>Left</RME>
        </RME>
        <RME w-100 row b p15 right h100 mb15>
          <RME bgc-primary w100 h60>Right</RME>
        </RME>
      </RME>
      <RME>
        <Code code={`
<RME w-100 row b p15 center h100 mb15>
  <RME bgc-primary w100 h60>Center</RME>
</RME>
<RME w-100 row b p15 left h100 mb15>
  <RME bgc-primary w100 h60>Left</RME>
</RME>
<RME w-100 row b p15 right h100 mb15>
  <RME bgc-primary w100 h60>Right</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}