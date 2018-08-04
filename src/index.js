import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
<Provider store={store()}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
