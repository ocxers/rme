import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../components/common/Code'
import colorsConst from '../../../constants/colors'
import _ from 'lodash'

export default (props: any) => {
  const renderColorsWithAlerts = () => {
    return _.map(_.keys(colorsConst), (k: string, idx: number) => {
      return (
        <RME alert {...{[k]:true}} key={idx} mb5 r5>${k}: {colorsConst[k]};</RME>
      )
    })
  }
  return (
    <RME ph30>
      <RME h1>Colors</RME>
      <RME mb15>
        <Code code={`
$primary:       #007bff;
$secondary:     #6c757d;
$success:       #28a745;
$danger:        #dc3545;
$warning:       #ffc107;
$info:          #17a2b8;
$light:         #f8f9fa;
$dark:          #343a40;
$white:         #fff;
$transparent:   transparent;
$bdColor:       #d9d9d9;

$colors:
/*  color name      color          text color  */
    primary         $primary       $white;    
    secondary       $secondary     $white;    
    success         $success       $white;    
    danger          $danger        $white;    
    warning         $warning       $dark;     
    info            $info          $white;    
    light           $light         $dark;     
    dark            $dark          $white;    
    white           $white         $dark;     
    transparent     $transparent   $dark;
     `}/>
        <RME h2>Use your own colors</RME>
        <Code code={`
import RME from 'react-magic-element

RME.config({
    /*         color      text color */ // text color for: tag, and button
    primary: ['#ffcc00', '#ccc']
})
      `}/>
      </RME>
      <RME>
        {renderColorsWithAlerts()}
      </RME>
    </RME>
  )
}