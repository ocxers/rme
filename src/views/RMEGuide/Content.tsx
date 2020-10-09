import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RME from 'react-magic-element'
import RMERoutes from './routes'
import { Route, Switch } from 'react-router-dom'
import _ from 'lodash'
import Code from '../../components/common/Code'

export default (props: any) => {
  const location = useLocation()
  const [rmeProps, setRmeProps] = useState('')
  const [computeRmeProps, setComputeRmeProps] = useState({} as any)
  const [propTags, setPropTags] = useState({} as any)
  const handleRmePropsChanged = (ev: any) => {
    setRmeProps(ev.target.value)
  }
  const handleAddProps = () => {
    if (rmeProps) {
      const keyValue = _.compact(rmeProps.split('='))
      if (keyValue.length) {
        const rmePropsObj: any = _.cloneDeep(propTags)
        rmePropsObj[keyValue[0]] = keyValue[1] ? keyValue[1] : true

        setPropTags(rmePropsObj)
      }
    }
    setRmeProps('')
  }
  useEffect(() => {
    const rmePropTags: any = {}
    _.map(_.compact('mb15  b bhw14 bvw35 bs-double bc-success btc-danger blc-info r-50'.split(' ')), (key: string) => {
      rmePropTags[key] = true
    })

    setPropTags(rmePropTags)
  }, [])

  useEffect(() => {
    // @ts-ignore
    let computedPropTags = RME.computeProps(propTags)
    setComputeRmeProps(computedPropTags)
  }, [propTags])
  const renderContent = () => {
    let tagName = computeRmeProps.tagName || 'div'
    if (computeRmeProps.className) {
      delete computeRmeProps.tagName
      if (tagName === 'input') {
        return (
          <input type={props.type || 'text'}
                 {...computeRmeProps}
          />
        )
      }

      return React.createElement(tagName, computeRmeProps, [<React.Fragment key={Date.now()}>RME</React.Fragment>])
    }
  }
  const handleRemoveTag = (tag: any) => {
    let tempPropTags = _.cloneDeep(propTags)
    delete tempPropTags[tag]
    setPropTags(tempPropTags)
  }
  const renderTag = (key: string, val: any) => {
    if (_.isBoolean(val)) {
      return key
    } else {
      return `${key}=${val}`
    }
  }
  const renderPropTags = () => {
    return _.map(_.keys(propTags), (key: any, idx: number) => {
      return (
        <RME tag key={idx} primary mb10>{renderTag(key, propTags[key])} <RME span onClose={() => {
          handleRemoveTag(key)
        }}></RME></RME>
      )
    })
  }
  const renderDefaultStylesContent = () => {
    if (location.pathname === '/rme' || location.pathname === '/rme/') {
      return (
        <RME ph30>
          <RME h1>Welcome to RME!</RME>
          <RME p>旨在提高react开发效率. 以`props`的方式来书写`className`和`style`. 以`<RME a href={'/rme/styles/padding'}>padding</RME>`为例, 如:</RME>
          <RME h2>如何使用</RME>
          <RME mb30>
            <Code code={`
<RME p[t|r|b|l|h|v]number></RME>
<RME p[t|r|b|l|h|v]-number></RME>
<RME p-[top number]-[right number]-[bottom number]-[left number]></RME>
<RME p[-t+number][-r+number][-b+number][-l+number][-h+number][-v+number]></RME>
<RME p[t|r|b|l|h|v]={value}></RME>
        `} />
          </RME>
          <RME mb30>
            <RME label={'p15'} labelWidth={120}>-> className: rme--p15, 效果: padding: 15px;</RME>
            <RME label={'pt15'} labelWidth={120}>-> className: rme--pt15, 效果: padding-top: 15px;</RME>
            <RME label={'p-16-12-8-4'} labelWidth={120}>-> style: padding: 16px 12px 8px 4px;</RME>
            <RME label={'p-16---4'} labelWidth={120}>-> style: padding-top: 16px; padding-left: 4px;</RME>
            <RME label={'p-t16-l4'} labelWidth={120}>-> style: padding-top: 16px; padding-left: 4px;</RME>
            <RME label={'p-h16-v4'} labelWidth={120}>-> style: padding: 4px 16px;</RME>
            <RME label={'p="16 12 8 4"'} labelWidth={120}>-> style: padding: 16px 12px 8px 4px;</RME>
            <RME label={'p="16,12,8,4"'} labelWidth={120}>-> style: padding: 16px 12px 8px 4px;</RME>
            <RME label={'p="16,,,4"'} labelWidth={120}>-> style: padding-top: 16px; padding-left: 4px;</RME>
            <RME label={'p="t16,l4"'} labelWidth={120}>-> style: padding-top: 16px; padding-left: 4px;</RME>
            <RME label={'p=h16,v4'} labelWidth={120}>-> style: padding: 4px 16px;</RME>
          </RME>
          {/*<RME mb30>It's a personal small library to speed up a little.</RME>*/}
          <RME center txt-center mb30>
            <RME row mb30>
              <RME input big placeholder={'Input some props'} value={rmeProps} onChange={handleRmePropsChanged} />
            </RME>
            <RME btn primary onClick={handleAddProps}>Add Props</RME>
          </RME>
          <RME b-warning r5 p15 mb30>
            <RME bg={'#efefef'} r5 p15 mb15>{renderPropTags()}</RME>
            {renderContent()}
          </RME>
        </RME>
      )
    }
  }
  return (
    <RME fixed pos='60,0,0,240' cn-oy-auto pb30>
      <Switch>
        {_.values(RMERoutes).map((prop: any, key: number) => {
          return (
            <Route
              key={key}
              path={prop.layout + prop.path}
              component={prop.component}
            />
          )
        })}
      </Switch>
      {renderDefaultStylesContent()}
    </RME>
  )
}