import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'w-{number}'
}, {
  name: 'description',
  label: 'w-10, w-20, w-30, w-40, w-50, w-100'
}, {
  name: 'styles',
  label: 'width: {number}%'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Width</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}