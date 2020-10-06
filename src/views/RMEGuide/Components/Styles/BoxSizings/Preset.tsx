import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>preset</RME>
      <RME p>preset: mini, small, medium, big, large, huge</RME>
      <RME b row p30 mb15>
        <RME col3><RME b-primary mini></RME>mini: 16px x 16px.</RME>
        <RME col3><RME b-secondary small></RME>small: 24px x 24px.</RME>
        <RME col3><RME b-success medium></RME>medium: 32px x 32px.</RME>
        <RME col3><RME b-danger big></RME>big: 48px x 48px.</RME>
        <RME col4><RME b-warning large></RME>large: 64px x 64px.</RME>
        <RME col4><RME b-info huge></RME>huge:96px x 96px.</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME b row p30 mb15>
  <RME col3><RME b-primary mini></RME>mini: 16px x 16px.</RME>
  <RME col3><RME b-secondary small></RME>small: 24px x 24px.</RME>
  <RME col3><RME b-success medium></RME>medium: 32px x 32px.</RME>
  <RME col3><RME b-danger big></RME>big: 48px x 48px.</RME>
  <RME col4><RME b-warning large></RME>large: 64px x 64px.</RME>
  <RME col4><RME b-info huge></RME>huge:96px x 96px.</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}