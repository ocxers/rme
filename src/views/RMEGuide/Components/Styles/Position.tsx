import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'
import POS_Numbers from './Positions/POS-Numbers'
import POS_TRBLNumber from './Positions/POS-TRBLNumber'
import POS_Values from './Positions/POS-Values'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Position</RME>
      <RME alert success>CSS中的top, right, bottom, left属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME pos-[top number]-[right number]-[bottom number]-[left number]></RME>
<RME pos[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]></RME>
<RME pos={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <POS_Numbers />
      <POS_TRBLNumber />
      <POS_Values />
    </RME>
  )
}