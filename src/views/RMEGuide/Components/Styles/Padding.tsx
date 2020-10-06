import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'
import PTRBLHVNumber from './Paddings/PTRBLHVNumber'
import PTRBLHV_Number from './Paddings/PTRBLHV-Number'
import P_Numbers from './Paddings/P-Numbers'
import P_TRBLNumber from './Paddings/P-TRBLNumber'
import PTRBLHV_Values from './Paddings/PTRBLHV-Values'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Padding</RME>
      <RME alert success>CSS中的padding属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME p[t|r|b|l|h|v]number></RME>
<RME p[t|r|b|l|h|v]-number></RME>
<RME p-[top number]-[right number]-[bottom number]-[left number]></RME>
<RME p[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]></RME>
<RME p[t|r|b|l|h|v]={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <PTRBLHVNumber />
      <PTRBLHV_Number />
      <P_Numbers />
      <P_TRBLNumber />
      <PTRBLHV_Values />
    </RME>
  )
}