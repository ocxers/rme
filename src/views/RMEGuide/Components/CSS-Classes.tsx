import React from 'react'
import RME from 'react-magic-element'
import Colors from './Styles/CSSClasses/Colors'
import Grid from './Styles/CSSClasses/Grid'
import Width from './Styles/CSSClasses/Width'
import Height from './Styles/CSSClasses/Height'
import Padding from './Styles/CSSClasses/Padding'
import Margin from './Styles/CSSClasses/Margin'
import Border from './Styles/CSSClasses/Border'
import Font from './Styles/CSSClasses/Font'
import BoxSizing from './Styles/CSSClasses/BoxSizing'
import Background from './Styles/CSSClasses/Background'

export default (props: any) => {
  return (
    <RME ph30>
      <RME h1 primary>CSS Classes</RME>
      <RME alert success>RME provides some very useful preset css classes.</RME>
      <Colors />
      <Grid />
      <Width />
      <Height />
      <Padding />
      <Margin />
      <Border />
      <Font />
      <BoxSizing />
      <Background />
    </RME>
  )
}