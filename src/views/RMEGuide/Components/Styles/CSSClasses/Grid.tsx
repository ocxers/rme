import React from 'react'
import RMETable from '../../../../../components/common/RMETable'
import RME from 'react-magic-element'
import { tableHeader } from '../../../../../constants/tableHeader'

const columns = tableHeader
const dataSource = [[{
  name: 'property',
  label: 'row'
}, {
  name: 'description',
  label: 'A wrapper to render a row'
}, {
  name: 'styles',
  label: 'display: flex; flex-direction: row; flex-wrap: wrap;'
}], [{
  name: 'property',
  label: 'flex'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'display: flex; flex-direction: row; flex-wrap: wrap;'
}], [{
  name: 'property',
  label: 'col{number}'
}, {
  name: 'description',
  label: 'col1, col2...col24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'xs{number}'
}, {
  name: 'description',
  label: 'xs1, xs2...xs24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'sm{number}'
}, {
  name: 'description',
  label: 'sm1, sm2...sm24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'md{number}'
}, {
  name: 'description',
  label: 'md1, md2...md24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'lg{number}'
}, {
  name: 'description',
  label: 'lg1, lg2...lg24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'xl{number}'
}, {
  name: 'description',
  label: 'xl1, xl2...xl24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'xxl{number}'
}, {
  name: 'description',
  label: 'xxl1, xxl2...xxl24'
}, {
  name: 'styles',
  label: 'flex: 0 0 {number}/24; max-width: {number}/24;'
}], [{
  name: 'property',
  label: 'rest'
}, {
  name: 'description',
  label: 'The rest width of the row'
}, {
  name: 'styles',
  label: 'flex: 1 1; display: block;'
}], [{
  name: 'property',
  label: 'visible'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'display: initial; visibility: visible; overflow: initial;'
}], [{
  name: 'property',
  label: 'hidden'
}, {
  name: 'description',
  label: ''
}, {
  name: 'styles',
  label: 'display: none; visibility: hidden; overflow: hidden;'
}]]
export default (props: any) => {
  return (
    <>
      <RME h2>24 Grids system</RME>
      <RME mb15>
        Referring to the Bootstrap <RME a href={'http://getbootstrap.com/css/#grid-media-queries'} target='_blank'>responsive
        design</RME>, here preset six dimensions: xs sm md lg xl xxl
      </RME>
      <RME mb15>
        <RMETable columns={columns} dataSource={dataSource} />
      </RME>
    </>
  )
}