import React, { useEffect, useState } from 'react'
import RME from 'react-magic-element'
import Code from '../../../components/common/Code'
import { useLocation } from 'react-router'
import _ from 'lodash'

export default (props: any) => {
  const location = useLocation()
  const [rmeProps, setRmeProps] = useState('bc=#08979c #096dd9 #531dab #c41d7f')
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
    _.map(_.compact('mb30 p15 b bhw14 bvw35 bs-double bc-success btc-danger blc-info r-50'.split(' ')), (key: string) => {
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
    return (
      <RME ph30>
        <RME h1>Welcome to RME!</RME>
        <RME mb15>RME provides several magic ways for you to styling your html elements. Write
          <Code inline code={'classNames'} />, <Code inline code={'styles'} /> as <Code inline code={'props'} />.
        </RME>
        <RME mb15>
          <Code language={'html'} code={`
<RME mb30 p15 b bhw14 bvw35 bs-double bc={'#08979c #096dd9 #531dab #c41d7f'} r-60></RME>
     `} />
        </RME>
        <RME mb30 p15 b bhw14 bvw35 bs-double bc={'#08979c #096dd9 #531dab #c41d7f'} r-60>
          <RME row mb5>
            <RME w120>
              <Code inline code={'mb30'} />
            </RME>
            <RME rest>
              rme--mb30: margin-bottom: 30px;
            </RME>
          </RME>
          <RME row mb5>
            <RME w120>
              <Code inline code={'p15'} />
            </RME>
            <RME rest>
              rme--p15: padding: 15px;
            </RME>
          </RME>
          <RME row mb5>
            <RME w120>
              <Code inline code={'b'} />
            </RME>
            <RME rest>
              rme--b: border: 1px solid;
            </RME>
          </RME>
          <RME row mb5>
            <RME w120>
              <Code inline code={'bhw14'} />
            </RME>
            <RME rest>
              border-right-width: 14px; border-left-width: 14px;
            </RME>
          </RME>
          <RME row mb5>
            <RME w120>
              <Code inline code={'bvw35'} />
            </RME>
            <RME rest>
              border-top-width: 14px; border-bottom-width: 14px;
            </RME>
          </RME>
          <RME row mb5>
            <RME w120>
              <Code inline code={'bs-double'} />
            </RME>
            <RME rest>
              rme--bs-double: border-style: double;
            </RME>
          </RME>
          <RME row mb5>
            <RME w400>
              <Code inline>
                {`bc={'#08979c #096dd9 #531dab #c41d7f'}`}
              </Code>
            </RME>
            <RME rest>
              border-color: #08979c #096dd9 #531dab #c41d7f;
            </RME>
          </RME>
          <RME row mb5>
            <RME w120>
              <Code inline code={'r-60'} />
            </RME>
            <RME rest>
              border-radius: 60%;
            </RME>
          </RME>
        </RME>
        <RME h2>Try it</RME>
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
  return (
    <>
      {renderDefaultStylesContent()}
    </>
  )
}