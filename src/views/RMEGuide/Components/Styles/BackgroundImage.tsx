import React from 'react'
import RME   from 'react-magic-element'
import Code  from '../../../../components/common/Code'

const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'
export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Background Image</RME>
      <RME alert success>CSS中的background-image属性.</RME>
      <RME h2>如何使用</RME>
      <RME mb30>
        <Code code={`
<RME bgi={img}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME row mb15>
          <RME bgi={img} mr15 box-128 circle></RME>
        </RME>
        <Code code={`
<RME bgi={img} mr15 box-128 circle>background-image: url(url)</RME>
        `} />
      </RME>
    </RME>
  )
}