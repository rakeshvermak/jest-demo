import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

it('button should renders correctly ',() =>{
    const {getByTestId} = render(<Button label="Click me!!" />);
    const idElem = getByTestId('button');
    expect(idElem).toHaveTextContent('Click me!!');
})

it('button should renders correctly ',() =>{
    const {getByTestId} = render(<Button label="Save" />);
    const idElem = getByTestId('button');
    expect(idElem).toHaveTextContent('Save');
})