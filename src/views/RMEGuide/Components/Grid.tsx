import React from 'react'
import RME from 'react-magic-element'
import GridSys from './Styles/Grids/GridSys'
import Gutter from './Styles/Grids/Gutter'
import Rest from './Styles/Grids/Rest'
import Responsive from './Styles/Grids/Responsive'
import HiddenVisible from './Styles/Grids/HiddenVisible'
import Alignment from './Styles/Grids/Alignment'
import Code from '../../../components/common/Code'

export default (props: any) => {
  return (
    <RME ph30>
      <RME h1 primary>Grid</RME>
      <RME alert success>24网格系统.</RME>
      <RME h2>如何使用</RME>
      <RME mb15>
        <Code code={`
<RME row>
  <RME col[1~24] xs[1~24] sm[1~24] md[1~24] lg[1~24] xl[1~24] xxl[1~24]>
    <!-- grid内容 -->
  </RME>
</RME>
     `}/>
      </RME>
      <RME h2>代码演示</RME>
      <GridSys />
      <Gutter />
      <Rest />
      <Responsive />
      <HiddenVisible />
      <Alignment />
    </RME>
  )
}