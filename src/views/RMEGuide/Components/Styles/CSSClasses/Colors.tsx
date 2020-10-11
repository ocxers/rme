import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: '{color}'
}, {
  name: 'description',
  label: 'primary, secondary, success, danger, warning, info, light, dark, white, transparent'
}, {
  name: 'styles',
  label: 'color: {color}'
}], [{
  name: 'property',
  label: 'bg/bgc-{color}'
}, {
  name: 'description',
  label: 'bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, bg-info, bg-light, bg-dark, bg-white, bg-transparent'
}, {
  name: 'styles',
  label: 'background-color: {color}'
}], [{
  name: 'property',
  label: 'b/bc-{color}'
}, {
  name: 'description',
  label: 'bc-primary, bc-secondary, bc-success, bc-danger, bc-warning, bc-info, bc-light, bc-dark, bc-white, bc-transparent'
}, {
  name: 'styles',
  label: 'border-color: {color}'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Colors</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}