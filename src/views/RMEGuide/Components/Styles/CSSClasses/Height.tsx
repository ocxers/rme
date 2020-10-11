import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'h-{number}'
}, {
  name: 'description',
  label: 'h-10, h-20, h-30, h-40, h-50, h-100'
}, {
  name: 'styles',
  label: 'height: {number}%'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Height</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}