import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import Count from './count';

afterEach(cleanup)

describe('Count component loads correctly', () => {
    const { container } = render(<Count />)
    const { firstChild } = container
    test('renders correctly', () => {
        expect(container).toHaveTextContent(`Counter`)
    })

    test('first child should contain class "App"', () => {
        expect(firstChild).toHaveClass(`App`)
    })
})

