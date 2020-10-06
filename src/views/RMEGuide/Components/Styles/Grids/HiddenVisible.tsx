import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>Hidden and Visible</RME>
      <RME p>
        隐藏/显示元素. Hidden: [xs|sm|md|lg|xl|xxl]-hidden, Visible: [xs|sm|md|lg|xl|xxl]-visible
      </RME>
      <RME w-100 mb15 p15 b>
        <RME row g32>
          <RME col6 visible xl-hidden>
            <RME bg-primary>col6 xl-hidden</RME>
          </RME>
          <RME col6 hidden xl-visible>
            <RME bg-secondary>col6 xl-visible</RME>
          </RME>
          <RME col6>
            <RME bg-danger>col6</RME>
          </RME>
          <RME col6 md24 lg6>
            <RME bg-primary>col6 md24 lg6</RME>
          </RME>
          <RME col6 md-hidden lg-visible>
            <RME bg-danger>col6 md-hidden lg-visible</RME>
          </RME>
        </RME>
      </RME>
      <RME>
        <Code code={`
<RME row g32>
  <RME col6 visible xl-hidden>
    <RME bg-primary>col6 xl-hidden</RME>
  </RME>
  <RME col6 hidden xl-visible>
    <RME bg-secondary>col6 xl-visible</RME>
  </RME>
  <RME col6>
    <RME bg-danger>col6</RME>
  </RME>
  <RME col6 md24 lg6>
    <RME bg-primary>col6 md24 lg6</RME>
  </RME>
  <RME col6 md-hidden lg-visible>
    <RME bg-danger>col6 md-hidden lg-visible</RME>
  </RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}