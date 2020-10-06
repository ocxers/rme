import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME b-warning r5 p15 mb30>
      <RME h3>pos-[top number]-[right number]-[bottom number]-[left number]</RME>
      <RME p>
        pos-16-12-8-4, 渲染成: top: 16px; right: 12px; bottom: 8px; left: 4px
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary box-h64 absolute pos-16-12-8-4>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary box-h64 absolute pos-16-12-8-4>top: 16px; right: 12px; bottom: 8px; left: 4px</RME>
</RME>
     `} />
      </RME>
      <RME p>
        pos-16-auto--4, 渲染成: top: 16px; right: auto; left: 4px
      </RME>
      <RME mb15 b-success relative h96>
        <RME bg-primary box-h64 absolute pos-14 pos-16-auto--4>top: 16px; right: auto; bottom: 14px; left: 4px</RME>
      </RME>
      <RME mb15>
        <Code code={`
<RME mb15 b-success relative h96>
  <RME bg-primary box-h64 absolute pos-14 pos-16-auto--4>top: 16px; right: auto; bottom: 14px; left: 4px</RME>
</RME>
     `} />
      </RME>
    </RME>
  )
}