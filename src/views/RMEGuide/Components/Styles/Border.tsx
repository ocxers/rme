import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../../components/common/Code'
import BWTRBLHVNumber from './Borders/BWTRBLHVNumber'
import BWTRBLHV_Number from './Borders/BWTRBLHV-Number'
import BW_Numbers from './Borders/BW-Numbers'
import BW_TRBLNumber from './Borders/BW-TRBLNumber'
import BWTRBLHV_Values from './Borders/BWTRBLHV-Values'
import BC_Colors from './Borders/BC-Colors'
import BC_TRBLColor from './Borders/BC-TRBLColor'
import BTRBLHVC_Values from './Borders/BTRBLHVC-Values'
import BRTRBLNumber from './Borders/BRTRBLNumber'
import BRTRBL_Number from './Borders/BRTRBL-Number'
import BR_Numbers from './Borders/BR-Numbers'
import BR_TRBLNumber from './Borders/BR-TRBLNumber'
import BTRBLR_Values from './Borders/BTRBLR-Values'

export default (props: any) => {
  return (
    <RME>
      <RME h1 primary>Border</RME>
      <RME alert success>CSS中的padding属性.</RME>
      <RME h2>如何使用</RME>
      <RME h3>Border Width</RME>
      <RME mb30>
        <Code code={`
<RME b></RME>
<RME b[t|r|b|l|h|v]wnumber></RME>
<RME b[t|r|b|l|h|v]w-number></RME>
<RME bw-[top number]-[right number]-[bottom number]-[left number]></RME>
<RME bw[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]></RME>
<RME b[t|r|b|l|h|v]w={value}></RME>
        `} />
      </RME>
      <RME h3>Border Color</RME>
      <RME mb30>
        <Code code={`
<RME b[t|r|b|l|h|v]c-color></RME>
<RME bc-[top color]-[right color]-[bottom color]-[left color]></RME>
<RME b[t|r|b|l|h|v][c]={value}></RME>
        `} />
      </RME>
      <RME h3>Border Radius</RME>
      <RME mb30>
        <Code code={`
<RME r[tl|bl|tr|br]number></RME>
<RME r[tl|bl|tr|br]-number></RME>
<RME r-[top left number]-[top right number]-[bottom right number]-[bottom left number]></RME>
<RME r[-tl+number][-tr+number][-br+number][-bl+number]></RME>
<RME r[tl|bl|tr|br]={value}></RME>
        `} />
      </RME>
      <RME h2>代码演示</RME>
      <BWTRBLHVNumber />
      <BWTRBLHV_Number />
      <BW_Numbers />
      <BW_TRBLNumber />
      <BWTRBLHV_Values />
      <BC_Colors />
      <BC_TRBLColor />
      <BTRBLHVC_Values />
      <BRTRBLNumber />
      <BRTRBL_Number />
      <BR_Numbers />
      <BR_TRBLNumber />
      <BTRBLR_Values />
{/*      <RME mb30>*/}
{/*        <Code code={`*/}
{/*<RME mb15 b bhw14 bvw35 bs-double bc-success btc-danger blc-info brc={'dark'} r-50 bbc={'success'}>*/}
{/*  border-width: 35px 14px; <br/>*/}
{/*  border-style: double; <br/>*/}
{/*  border-color: danger dark success info; <br/>*/}
{/*  border-radius: 50%;*/}
{/*</RME>*/}
{/*     `} />*/}
{/*      </RME>*/}
{/*      <RME b p30>*/}
{/*        <RME mb15 b bhw14 bvw35 bs-double bc-success btc-danger blc-info brc={'dark'} r-50 bbc={'success'}>*/}
{/*          border-width: 35px 14px; <br />*/}
{/*          border-style: double; <br />*/}
{/*          border-color: danger dark success info; <br />*/}
{/*          border-radius: 50%;*/}
{/*        </RME>*/}
{/*      </RME>*/}
    </RME>
  )
}