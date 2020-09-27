import React from 'react'
import {connect} from "react-redux"
import i18n from 'i18next'
import resources from './i18n'

const initI18n = (lng: string = 'en') => {
    i18n.init({
        resources,
        lng: lng
    })
}

const mapStateToProps = ({lngState}: { lngState: any }) => {
    initI18n(lngState.lng)
    return {
        lng: lngState.lng
    }
}

const I18NProvider = (props: any) => {
    const renderPageByLng = () => {
        return <>{props.children}</>
    }

    return renderPageByLng()
}

export default connect(mapStateToProps)(I18NProvider)