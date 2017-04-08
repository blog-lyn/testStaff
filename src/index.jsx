import Rx from 'rxjs';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
const input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');
input.filter(event => event.target.value.length > 1)
  .map(event => event.target.value)
  .throttleTime(1500)
  //.debounceTime(500)
  //.distinctUntilChanged()
  .subscribe(value => console.log(value));
