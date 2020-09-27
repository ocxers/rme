import React from 'react'
import cx from 'classnames'
import RME from 'react-magic-element'

export default (props: any) => {
  return (
   <RME header fixed h45 w-100 center className={cx('box-bottom-shadow')}>
    Header
   </RME>
  )
}