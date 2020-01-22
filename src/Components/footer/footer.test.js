import React from 'react';
import { render,cleanup } from '@testing-library/react';
import FooterPage from './footer';

afterEach(cleanup);

test('should renders Copyright', () => {
  const { getByText } = render(<FooterPage />);
  const linkElement = getByText(/Copyright:/i);
  expect(linkElement).toBeInTheDocument();
});

//Taking snapshots

it('should renders footer snapshot',()=>{
    const {asFragment} = render(<FooterPage />);
    expect(asFragment()).toMatchSnapshot();
})
