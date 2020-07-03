import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EnterModalHooks from './AuthModal/blocks/Modal/EnterModalHooks';
import RegistrationAppHooks from './AuthModal/blocks/Modal/RegistrationModalHooks';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<React.StrictMode>
  <div className='container'><EnterModalHooks /><RegistrationAppHooks /></div>  
   </React.StrictMode>, 
   document.getElementById('container'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
