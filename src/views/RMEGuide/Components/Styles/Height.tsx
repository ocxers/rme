import React from 'react'
import RME  from 'react-magic-element'
import Code from '../../../../components/common/Code'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Height</RME>
      <RME mb30>
        <Code code={`
<RME h234 b-success flex>
  <RME h-36 b-primary>height=parent's 36% height</RME>
</RME>
     `}/>
      </RME>
      <RME h234 b-success flex>
        <RME h-36 b-primary>height=parent's 36% height</RME>
      </RME>
    </RME>
  )
}