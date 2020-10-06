import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>b[t|r|b|l|h|v]c-color</RME>
      <RME p>
        b-primary, 渲染成: border-color: primary
      </RME>
      <RME mb15 p15 b b-primary>border-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b b-primary>border-color: primary</RME>
     `} />
      </RME>
      <RME p>
        bc-primary, 渲染成: border-color: primary
      </RME>
      <RME mb15 p15 b bc-primary>border-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bc-primary>border-color: primary</RME>
     `} />
      </RME>
      <RME p>
        btc-primary, 渲染成: border-top-color: primary
      </RME>
      <RME mb15 p15 b btc-primary>border-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b btc-primary>border-color: primary</RME>
     `} />
      </RME>
      <RME p>
        bhc-primary, 渲染成: border-right-color: primary; border-left-color: primary
      </RME>
      <RME mb15 p15 b bhc-primary>border-right-color: primary; border-left-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bhc-primary>border-right-color: primary; border-left-color: primary</RME>
     `} />
      </RME>
      <RME p>
        bvc-primary, 渲染成: border-top-color: primary; border-bottom-color: primary
      </RME>
      <RME mb15 p15 b bvc-primary>border-top-color: primary; border-bottom-color: primary</RME>
      <RME mb15>
        <Code code={`
<RME mb15 p15 b bvc-primary>border-top-color: primary; border-bottom-color: primary</RME>
     `} />
      </RME>
      <RME p>
        组合
      </RME>
      <RME mb15 p15 b bc-primary bvc-danger btc-success blc-info>border-color: success primary danger info</RME>
      <RME>
        <Code code={`
<RME mb15 p15 b bc-primary bvc-danger btc-success blc-info>border-color: success primary danger info</RME>
     `} />
      </RME>
    </RME>
  )
}