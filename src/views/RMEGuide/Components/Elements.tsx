import React from 'react'
import RME from 'react-magic-element'
import Code from '../../../components/common/Code'

export default (props: any) => {
  const handleChange = (event: any) => {
    console.log(event.target.value)
  }
  return (
    <RME ph30>
      <RME h1 primary>Elements</RME>
      <RME alert success>将RME渲染成指定的html元素.</RME>
      <RME h2>如何使用</RME>
      <RME mb15>
        <Code code={`
<RME tagName></RME>
        `} />
      </RME>
      <RME alert info>
        INFO: tagName为: input, h1, h2, h3, h4, h5, h6, p, nav, label, header, footer, button, btn, a, ul, ol, li, span,
        section, address
      </RME>
      <RME h2>代码演示</RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>input</RME>
        <RME mb15>
          <RME input></RME>
        </RME>
        <RME>
          <Code code={`
<RME input></RME>
     `} />
        </RME>
      </RME>
      <RME b-warning r5 p15 mb30>
        <RME h3>h[1~6]</RME>
        <RME mb15>
          <RME h1>Render as h1</RME>
          <RME h2>Render as h2</RME>
          <RME h3>Render as h3</RME>
          <RME h4>Render as h4</RME>
          <RME h5>Render as h5</RME>
          <RME h6>Render as h6</RME>
        </RME>
        <RME>
          <Code code={`
<RME h1>Render as h1</RME>
<RME h2>Render as h2</RME>
<RME h3>Render as h3</RME>
<RME h4>Render as h4</RME>
<RME h5>Render as h5</RME>
<RME h6>Render as h6</RME>
     `} />
        </RME>
      </RME>
      {/*<RME>*/}
      {/*  <RME>Default render as div</RME>*/}
      {/*  <RME h1>Render as h1</RME>*/}
      {/*  <RME h2>Render as h2</RME>*/}
      {/*  <RME h3>Render as h3</RME>*/}
      {/*  <RME h4>Render as h4</RME>*/}
      {/*  <RME h5>Render as h5</RME>*/}
      {/*  <RME h6>Render as h6</RME>*/}
      {/*  <RME p>Render as p</RME>*/}
      {/*  <RME span>Render as span</RME>*/}
      {/*  <RME nav>Render as nav</RME>*/}
      {/*  <RME label>Render as label</RME>*/}
      {/*  <RME header>Render as header</RME>*/}
      {/*  <RME footer>Render as footer</RME>*/}
      {/*  <RME button>Render as button</RME>*/}
      {/*  <RME btn>Render as button</RME>*/}
      {/*  <RME a>Render as a</RME>*/}
      {/*  <RME ul>Render as ul</RME>*/}
      {/*  <RME ol>Render as ol</RME>*/}
      {/*  <RME li>Render as li</RME>*/}
      {/*  <RME section>Render as section</RME>*/}
      {/*  <RME address>Render as address</RME>*/}
      {/*  <RME tag>Render as tag</RME>*/}
      {/*  <RME alert>Render as alert</RME>*/}
      {/*  <RME pv15 label={<RME w240 txt-right pr5 key={1}>Password: </RME>}*/}
      {/*       value={<RME input w360 type='password' placeholder='Please input password' onChange={handleChange}*/}
      {/*                   key={2} />} />*/}
      {/*</RME>*/}
    </RME>
  )
}