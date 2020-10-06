import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>Responsive</RME>
      <RME p>
        参考Bootstrap的responsive设计, 这里预设了6种尺寸: xs sm md lg xl xxl.
      </RME>
      <RME w-100 mb15 p15 b>
        <RME row g32>
          <RME xs20 sm18 md12 lg10 xl8 xxl6>
            <RME bgc-primary>col12</RME>
          </RME>
          <RME xs4 sm6 md12 lg14 xl16 xxl18>
            <RME bgc-secondary>xs4 sm6 md12 lg14 xl16 xxl18</RME>
          </RME>
        </RME>
      </RME>
      <RME>
        <Code code={`
<RME row g32>
  <RME xs20 sm18 md12 lg10 xl8 xxl6>
    <RME bgc-primary>col12</RME>
  </RME>
  <RME xs4 sm6 md12 lg14 xl16 xxl18>
    <RME bgc-secondary>xs4 sm6 md12 lg14 xl16 xxl18</RME>
  </RME>
</RME>
     `}/>
      </RME>
    </RME>
  )
}