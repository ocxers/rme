import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'fs{number}'
}, {
  name: 'description',
  label: 'fs9, fs10, fs11, fs12, fs13, fs14, fs15, fs16, fs17, fs18, fs24, fs32, fs48, fs64, fs72'
}, {
  name: 'styles',
  label: 'font-size: {number}px'
}], [{
  name: 'property',
  label: 'fw{number}'
}, {
  name: 'description',
  label: 'fw100, fw200, fw300, fw400, fw500, fw600, fw700, fw800, fw900'
}, {
  name: 'styles',
  label: 'font-weight: {number}'
}], [{
  name: 'property',
  label: 'lc{number}'
}, {
  name: 'description',
  label: 'lc1, lc2, lc3, lc4'
}, {
  name: 'styles',
  label: '-webkit-line-clamp: {number}'
}], [{
  name: 'property',
  label: 'pointer'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'cursor: pointer'
}], [{
  name: 'property',
  label: 'underline'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'text-decoration: underline'
}], [{
  name: 'property',
  label: 'line-through'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'text-decoration: line-through'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Font</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}