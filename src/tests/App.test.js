import React from 'react';
import ReactDOM from 'react-dom';	
import App from './App';	


it('renders without crashing', () => {	
  const div = document.createElement('div');	test("testing",()=>{
  ReactDOM.render(<App />, div);	  expect(1).toBe(1);
  ReactDOM.unmountComponentAtNode(div);	
});