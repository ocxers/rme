import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>Rest</RME>
      <RME p>让当前元素填充所在Row的剩下的空间(width).</RME>
      <RME w-100 mb15 p15 b>
        <RME row g32>
          <RME col12>
            <RME bgc-primary>col12</RME>
          </RME>
          <RME rest>
            <RME bgc-secondary>rest</RME>
          </RME>
        </RME>
        <RME row g32>
          <RME rest>
            <RME bgc-secondary>rest</RME>
          </RME>
          <RME col7>
            <RME bgc-primary>col7</RME>
          </RME>
        </RME>
        <RME row g32>
          <RME rest>
            <RME bgc-danger>rest</RME>
          </RME>
          <RME w456>
            <RME bgc-primary>w456 -> width: 456px;</RME>
          </RME>
        </RME>
      </RME>
      <RME>
        <Code code={`
<RME row g32>
  <RME col12>
    <RME bgc-primary>col12</RME>
  </RME>
  <RME rest>
    <RME bgc-secondary>rest</RME>
  </RME>
</RME>
<RME row g32>
  <RME rest>
    <RME bgc-secondary>rest</RME>
  </RME>
  <RME col7>
    <RME bgc-primary>col7</RME>
  </RME>
</RME>
<RME row g32>
  <RME rest>
    <RME bgc-danger>rest</RME>
  </RME>
  <RME w456>
    <RME bgc-primary>w456 -> width: 456px;</RME>
  </RME>
</RME>
     `}/>
      </RME>
    </RME>
  )
}