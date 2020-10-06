import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'
import MTRBLHVNumber from './MTRBLHVNumber'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>m-[top number]-[right number]-[bottom number]-[left number]</RME>
      <RME p>
        m-16-12-8-4, 渲染成: margin: 16px 12px 8px 4px
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m-16-12-8-4>margin: 16px 12px 8px 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m-16-12-8-4>margin: 16px 12px 8px 4px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        m-16---4, 渲染成: margin-top: 16px; margin-left: 4px <br />
      </RME>
      <RME mb15 b-success>
        <RME bg-primary m-16---4>margin-top: 16px; margin-left: 4px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success>
  <RME bg-primary m-16---4>margin-top: 16px; margin-left: 4px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}