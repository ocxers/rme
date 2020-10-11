import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'bg-{color}'
}, {
  name: 'description',
  label: 'bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, bg-info, bg-light, bg-dark, bg-white, bg-transparent'
}, {
  name: 'styles',
  label: 'background-color: {color}'
}], [{
  name: 'property',
  label: 'bgi'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'background-position: center; background-size: cover; background-repeat: no-repeat;'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Background</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}