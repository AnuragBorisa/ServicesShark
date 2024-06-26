import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TagManager from 'react-gtm-module';
import { HashRouter} from 'react-router-dom';
const tagManagerArgs = {
  gtmId: "GTM-TSPT2PMX",
};
TagManager.initialize(tagManagerArgs);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HashRouter basename="/">
    <App />
    </HashRouter>
  </React.StrictMode>,
)
