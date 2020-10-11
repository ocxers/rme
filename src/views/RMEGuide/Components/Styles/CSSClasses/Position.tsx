import React from 'react'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'
import RMETable from '../../../../../components/common/RMETable'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'p{number}'
}, {
  name: 'description',
  label: 'p0, p5, p10, p15, p20, p25, p30'
}, {
  name: 'styles',
  label: 'padding: {number}px'
}], [{
  name: 'property',
  label: 'pt{number}'
}, {
  name: 'description',
  label: 'pt0, pt5, pt10, pt15, pt20, pt25, pt30'
}, {
  name: 'styles',
  label: 'padding-top: {number}px'
}], [{
  name: 'property',
  label: 'pr{number}'
}, {
  name: 'description',
  label: 'pr0, pr5, pr10, pr15, pr20, pr25, pr30'
}, {
  name: 'styles',
  label: 'padding-right: {number}px'
}], [{
  name: 'property',
  label: 'pb{number}'
}, {
  name: 'description',
  label: 'pb0, pb5, pb10, pb15, pb20, pb25, pb30'
}, {
  name: 'styles',
  label: 'padding-bottom: {number}px'
}], [{
  name: 'property',
  label: 'pl{number}'
}, {
  name: 'description',
  label: 'pl0, pl5, pl10, pl15, pl20, pl25, pl30'
}, {
  name: 'styles',
  label: 'padding-left: {number}px'
}], [{
  name: 'property',
  label: 'ph{number}'
}, {
  name: 'description',
  label: 'ph0, ph5, ph10, ph15, ph20, ph25, ph30'
}, {
  name: 'styles',
  label: 'padding-right: {number}px; padding-left: {number}px'
}], [{
  name: 'property',
  label: 'pv{number}'
}, {
  name: 'description',
  label: 'pv0, pv5, pv10, pv15, pv20, pv25, pv30'
}, {
  name: 'styles',
  label: 'padding-top: {number}px; padding-bottom: {number}px'
}]]

export default (props: any) => {
  return (
    <>
      <RME h2>Position</RME>
      <RME mb15>
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}