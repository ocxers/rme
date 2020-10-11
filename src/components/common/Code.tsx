import React from 'react'
import RME from 'react-magic-element'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default (props: any) => {
  const { inline, language, code, children } = props
  const renderCodeSandbox = () => {
    if (props.url) {
      return (
        <RME absolute pv5 r5 ph10 bg-primary cn-link>
          <a href={props.url} target='_blank'>Open in CodeSandbox</a>
        </RME>
      )
    }
  }
  return (
    <RME relative cn-code-box r5 cn={inline ? 'inline' : ''}>
      <SyntaxHighlighter style={docco}
                         wrapLines={true}
                         language={language || 'html'}>{code || children}</SyntaxHighlighter>
      {renderCodeSandbox()}
    </RME>
  )
}