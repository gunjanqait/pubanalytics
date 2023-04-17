import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@liveintent/lui/dist/esm/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PortalContextProvider, PortalContext } from 'contexts';

class AppWrapper extends HTMLElement {
  private mountPoint?: HTMLElement;
  private context: PortalContext;

  public connectedCallback() {
    this.mountPoint = document.createElement('div');

    this.appendChild(this.mountPoint);

    ReactDOM.render(
      <React.StrictMode>
        <PortalContextProvider value={this.context}>
          <App />
        </PortalContextProvider>
      </React.StrictMode>,
      this.mountPoint
    );
  }
}

// asdf
customElements.define('li-myapp', AppWrapper);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
