import React from 'react'
import _ from 'lodash'
import RME from 'react-magic-element'

export default (props: any) => {
  const { dataSource, columns } = props
  const widthList: Array<string> = []
  const renderTableHeader = () => {
    if (!_.isEmpty(columns)) {
      return (
        <RME row bg-primary>
          {_.map(columns, (col: any) => {
            widthList.push(col.width)
            return (
              <RME p-10-15 key={col.name} {...{ [col.width]: true }}>{col.label}</RME>
            )
          })}
        </RME>
      )
    }
  }

  const renderTableBody = () => {
    if (!_.isEmpty(dataSource)) {
      return _.map(dataSource, (dataItem: any, index: number) => {
          return (
            <RME row key={index}>
              {_.map(dataItem, (item: any, idx: number) => {
                return (
                  <RME p-10-15 key={item.name} {...{ [item.width || widthList[idx]]: true }}>{item.label}</RME>
                )
              })}
            </RME>
          )
        }
      )
    }
  }
  return (
    <>
      {renderTableHeader()}
      {renderTableBody()}
    </>
  )
}