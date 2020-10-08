import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RME from 'react-magic-element'
import RMERoutes from './routes'
import { Route, Switch } from 'react-router-dom'
import _ from 'lodash'

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