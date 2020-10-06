import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>bc-[top color]-[right color]-[bottom color]-[left color]</RME>
      <RME p>
        bc-primary-secondary-success-danger, 渲染成: border-color: primary secondary success danger
      </RME>
      <RME mb15 p15 b bc-primary-secondary-success-danger>border-color: primary secondary success danger</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc-primary-secondary-success-danger>border-color: primary secondary success danger</RME>
     `} />
      </RME>
      <RME p>
        bc-primary---danger, 渲染成: border-top-color: primary; border-left-color: danger
      </RME>
      <RME mb15 p15 b bc-primary---danger>border-top-color: primary; border-left-color: danger</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc-primary---danger>border-top-color: primary; border-left-color: danger</RME>
     `} />
      </RME>
    </RME>
  )
}