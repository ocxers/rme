import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'
import Preset from './BoxSizings/Preset'
import BoxNumber from './BoxSizings/BoxNumber'
import Box_Number from './BoxSizings/Box-Number'
import Box_Numbers from './BoxSizings/Box-Numbers'
import Box_WHNumbers from './BoxSizings/Box-WHNumbers'
import Box_Values from './BoxSizings/Box-Values'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>BoxSizing</RME>
      <RME alert success>CSS中的width, height属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME [preset]></RME>
<RME boxnumber></RME>
<RME box-number></RME>
<RME box-[width number]-[height number]></RME>
<RME box[-w+number][-h+number]></RME>
<RME box={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <Preset />
      <BoxNumber/>
      <Box_Number/>
      <Box_Numbers />
      <Box_WHNumbers />
      <Box_Values />
    </RME>
  )
}