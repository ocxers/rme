import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'
import MTRBLHVNumber from './Margins/MTRBLHVNumber'
import MTRBLHV_Number from './Margins/MTRBLHV-Number'
import M_Numbers from './Margins/M-Numbers'
import M_TRBLNumber from './Margins/M-TRBLNumber'
import MTRBLHV_Values from './Margins/MTRBLHV-Values'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Margin</RME>
      <RME alert success>CSS中的margin属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME m[t|r|b|l|h|v]number></RME>
<RME m[t|r|b|l|h|v]-number></RME>
<RME m-[top number]-[right number]-[bottom number]-[left number]></RME>
<RME m[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]></RME>
<RME m[t|r|b|l|h|v]={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <MTRBLHVNumber />
      <MTRBLHV_Number />
      <M_Numbers />
      <M_TRBLNumber />
      <MTRBLHV_Values />
    </RME>
  )
}