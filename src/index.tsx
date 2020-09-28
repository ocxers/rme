import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ErrorBoundary from './components/common/ErrorBoundary'
import { I18NProvider } from './providers'

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <I18NProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </I18NProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
