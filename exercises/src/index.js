import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function AddressLabel() {
  return (
    <span>Nepal</span>
  );
}

ReactDOM.render(
  <AddressLabel/>,
  document.querySelector('#root')
);
