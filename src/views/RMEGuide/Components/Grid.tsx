import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../components/common/Code'

export default (props: any) => {
  return (
    <RME ph15>
      <RME h1>Grid</RME>
      <RME mb30>
        <Code code={`
import RME from 'react-magic-element

export default () => {
    return (
        <RME flex center>
            <RME w-90>
                <RME b-success row g32>
                    <RME xs24 sm16 md12 lg8 xl4 xxl2>
                        <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>
                    </RME>
                    <RME xs24 rest>
                        <RME row>
                            <RME col12>
                                <RME bgc-secondary>col12</RME>
                            </RME>
                            <RME rest>
                                <RME bgc-danger>rest</RME>
                            </RME>
                        </RME>
                    </RME>
                </RME>
            </RME>
        </RME>
    )
}
     `}/>
      </RME>
      <RME flex center>
        <RME w-100 b p15>
          <RME b-success row g32>
            <RME xs24 col12>
              <RME bgc-primary>xs24 sm16 md12 lg8 xl4 xxl2</RME>
            </RME>
            <RME xs24 col12>
              <RME row>
                <RME col12>
                  <RME bgc-secondary>col12</RME>
                </RME>
                <RME rest>
                  <RME bgc-danger>rest</RME>
                </RME>
              </RME>
            </RME>
          </RME>
        </RME>
      </RME>
    </RME>
  )
}