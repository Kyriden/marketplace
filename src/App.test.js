import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let container = null;

beforeEach( () => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  unmountComponentAtNode(container);
  container.remove();
});

// test('Fake test', () => {
//   expect(true).toBeTruthy();
// });

it('renders without crashing', () => {
  act( () => {
    render(<Button>Hello, world!</Button>, container);
  });
  expect(document.querySelector("[data-testid='button']").textContent).toMatch(
    "Hello, world!"
  );

// test('add', () => {
//   const value = add(1, 2);
//   expect(value).toBe(3);
// });



//Ce ne sont pas des vrais tests. J'ai tenté de comprendre comment ceux-ci marchaient mais sans succès,
//mais si c'est possible, une ou deux heures sur ceux-ci au prochain cours pourraient être utile !
