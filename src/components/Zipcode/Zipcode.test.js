import React from 'react';
import ReactDOM from 'react-dom';
import Zipcode from './Zipcode';

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<Zipcode/>, div);
});

