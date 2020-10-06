import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>24 Grids System</RME>
      <RME w-100 mb15 p15 b>
        <RME row>
          <RME col12>
            <RME bg-primary>col12</RME>
          </RME>
          <RME col6>
            <RME bg-secondary>col6</RME>
          </RME>
          <RME col3>
            <RME bg-success>col3</RME>
          </RME>
          <RME col2>
            <RME bg-danger>col2</RME>
          </RME>
          <RME col1>
            <RME bg-warning>col1</RME>
          </RME>
        </RME>
      </RME>
      <RME>
        <Code code={`
<RME row>
  <RME col12>
    <RME bg-primary>col12</RME>
  </RME>
  <RME col6>
    <RME bg-secondary>col6</RME>
  </RME>
  <RME col3>
    <RME bg-success>col3</RME>
  </RME>
  <RME col2>
    <RME bg-danger>col2</RME>
  </RME>
  <RME col1>
    <RME bg-warning>col1</RME>
  </RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}