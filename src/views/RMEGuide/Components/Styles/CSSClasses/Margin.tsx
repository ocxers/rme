import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'm{number}'
}, {
  name: 'description',
  label: 'm0, m5, m10, m15, m20, m25, m30'
}, {
  name: 'styles',
  label: 'margin: {number}px'
}], [{
  name: 'property',
  label: 'mt{number}'
}, {
  name: 'description',
  label: 'mt0, mt5, mt10, mt15, mt20, mt25, mt30'
}, {
  name: 'styles',
  label: 'margin-top: {number}px'
}], [{
  name: 'property',
  label: 'mr{number}'
}, {
  name: 'description',
  label: 'mr0, mr5, mr10, mr15, mr20, mr25, mr30'
}, {
  name: 'styles',
  label: 'margin-right: {number}px'
}], [{
  name: 'property',
  label: 'mb{number}'
}, {
  name: 'description',
  label: 'mb0, mb5, mb10, mb15, mb20, mb25, mb30'
}, {
  name: 'styles',
  label: 'margin-bottom: {number}px'
}], [{
  name: 'property',
  label: 'ml{number}'
}, {
  name: 'description',
  label: 'ml0, ml5, ml10, ml15, ml20, ml25, ml30'
}, {
  name: 'styles',
  label: 'margin-left: {number}px'
}], [{
  name: 'property',
  label: 'mh{number}'
}, {
  name: 'description',
  label: 'mh0, mh5, mh10, mh15, mh20, mh25, mh30'
}, {
  name: 'styles',
  label: 'margin-right: {number}px; margin-left: {number}px'
}], [{
  name: 'property',
  label: 'mv{number}'
}, {
  name: 'description',
  label: 'mv0, mv5, mv10, mv15, mv20, mv25, mv30'
}, {
  name: 'styles',
  label: 'margin-top: {number}px; margin-bottom: {number}px'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Margin</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}