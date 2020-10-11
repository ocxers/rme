import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: '{boxSize}'
}, {
  name: 'description',
  label: 'mini, small, medium, big, large, huge'
}, {
  name: 'styles',
  label: 'width: {boxSize}px; height: {boxSize}px'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>BoxSizing</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}