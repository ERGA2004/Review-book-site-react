import React from 'react';
import { shallow, mount, render } from 'enzyme';


import App from './App';

// Component
import ErrorBoundary from '../src/components/ErrorBoundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

test('Дочерний компонент должен существовать', () => {
  
  const wrapper = shallow(<App />);


  expect(wrapper.find(ErrorBoundary).length).toBe(1);
  expect(wrapper.find(BrowserRouter).length).toBe(1);
  expect(wrapper.find(Switch).length).toBe(1);
  expect(wrapper.find(Route).length).toBe(10);
});

