import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../components/common/Code'
import colorsConst from '../../../constants/colors'
import _ from 'lodash'

export default (props: any) => {
  const renderColorsWithAlerts = () => {
    return _.map(_.keys(colorsConst), (k: string, idx: number) => {
      return (
        <RME alert {...{ [k]: true }} key={idx} mb5 r5>${k}: {colorsConst[k]};</RME>
      )
    })
  }
  return (
    <RME ph30>
      <RME h1 primary>Colors</RME>
      <RME alert success>React Magic Element color system.</RME>
      <RME h2>RME color system</RME>
      <RME mb15>
        <RME p15 bg-primary>primary: #007bff;</RME>
        <RME p15 bg-secondary>secondary: #6c757d;</RME>
        <RME p15 bg-success>success: #28a745;</RME>
        <RME p15 bg-danger>danger: #dc3545;</RME>
        <RME p15 bg-warning>warning: #ffc107;</RME>
        <RME p15 bg-info>info: #17a2b8;</RME>
        <RME p15 bg-light>light: #f8f9fa;</RME>
        <RME p15 bg-dark>dark: #343a40;</RME>
        <RME p15 bg-white>white: #fff;</RME>
        <RME p15 bg-transparent>transparent: transparent;</RME>
      </RME>
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
     `} />
        <RME h2>Use your own colors</RME>
        <Code code={`
import RME from 'react-magic-element

RME.config({
    /*         color      text color */ // text color for: tag, and button
    primary: ['#ffcc00', '#ccc']
})
      `} />
      </RME>
    </RME>
  )
}