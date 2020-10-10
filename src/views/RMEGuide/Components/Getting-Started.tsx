import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../components/common/Code'

export default (props: any) => {
  return (
    <RME ph30>
      <RME h1>Getting Started</RME>
      <RME>React Magic Element (RME) is dedicated to providing a good development experience for react programmers. RME
        trying to help developers improve coding efficiency. RME provides several magic ways for you to styling your html
        elements.</RME>
      <RME h2>Environment Support</RME>
      <RME>Modern browsers</RME>
      <RME h2>Version</RME>
      <RME><img src="http://img.shields.io/npm/v/react-magic-element.svg" alt="" /></RME>
      <RME h2>Installation</RME>
      <RME mb15>
        <Code code={`
$ npm install react-magic-element
     `} />
      </RME>
      <RME h2>Usage</RME>
      <RME mb15>
        <Code code={`
import RME from 'react-magic-element'

ReactDom.render(<RME>Hello RME!</RME>, mountNode)
     `} />
      </RME>
      <RME h2>Customize SCSS variables</RME>
      <RME mb15>We are using SCSS as the development language for styling. A set of scss variables are defined for each
        design aspect that can be customized to your needs.</RME>
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
     `} language={'css'}/>
        <RME h2>How to do it</RME>
        <RME mb15>On your <Code inline code={'main.js'}/> page: </RME>
        <Code code={`
import RME from 'react-magic-element'

RME.config({
    /*         color      text color */ // text color for: tag, and button
    primary: ['#ffcc00', '#ccc']
})
      `} language={'javascript'} />
      </RME>
    </RME>
  )
}