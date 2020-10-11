import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'b'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'border: 1px solid'
}], [{
  name: 'property',
  label: 'bw{number}'
}, {
  name: 'description',
  label: 'bw1, bw2, bw3, bw4'
}, {
  name: 'styles',
  label: 'border-width: {number}px'
}], [{
  name: 'property',
  label: 'bs-{borderStyle}'
}, {
  name: 'description',
  label: 'bs-dotted, bs-dashed, bs-solid, bs-double'
}, {
  name: 'styles',
  label: 'border-style: {borderStyle}'
}], [{
  name: 'property',
  label: 'r{number}'
}, {
  name: 'description',
  label: 'r1, r2, r3, r4'
}, {
  name: 'styles',
  label: 'border-radius: {number}px'
}], [{
  name: 'property',
  label: 'r-100'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'border-radius: 100%'
}], [{
  name: 'property',
  label: 'bc-{color}'
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
      <RME h2>Border</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}