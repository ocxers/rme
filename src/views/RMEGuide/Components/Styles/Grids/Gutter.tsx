import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../../components/common/Code'

export default (props: any) => {
  return (
   <RME b-warning r5 p15 mb30>
     <RME h3>Gutter</RME>
     <RME p>column之间的间隔.</RME>
     <RME w-100 mb15 p15 b>
       <RME row g32>
         <RME col12>
           <RME bgc-primary>col12</RME>
         </RME>
         <RME col6>
           <RME bgc-secondary>col6</RME>
         </RME>
         <RME col3>
           <RME bgc-success>col3</RME>
         </RME>
         <RME col2>
           <RME bgc-danger>col2</RME>
         </RME>
         <RME col1>
           <RME bgc-warning>col1</RME>
         </RME>
       </RME>
     </RME>
     <RME>
       <Code code={`
<RME row g32>
  <RME col12>
    <RME bgc-primary>col12</RME>
  </RME>
  <RME col6>
    <RME bgc-secondary>col6</RME>
  </RME>
  <RME col3>
    <RME bgc-success>col3</RME>
  </RME>
  <RME col2>
    <RME bgc-danger>col2</RME>
  </RME>
  <RME col1>
    <RME bgc-warning>col1</RME>
  </RME>
</RME>
     `}/>
     </RME>
   </RME>
  )
}