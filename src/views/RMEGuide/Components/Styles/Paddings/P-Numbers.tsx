import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>p-[top number]-[right number]-[bottom number]-[left number]</RME>
      <RME p>
        p-16-12-8-4, 渲染成: padding: 16px 12px 8px 4px
      </RME>
      <RME mb15 b-success p-16-12-8-4>
        <RME bg-primary>padding: 16px 12px 8px 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success p-16-12-8-4>
  <RME bg-primary>padding: 16px 12px 8px 4px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        p-16---4, 渲染成: padding-top: 16px; padding-left: 4px <br />
      </RME>
      <RME mb15 b-success p-16---4>
        <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
      </RME>
      <RME>
        <Code code={`
<RME mb15 b-success p-16---4>
  <RME bg-primary>padding-top: 16px; padding-left: 4px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}