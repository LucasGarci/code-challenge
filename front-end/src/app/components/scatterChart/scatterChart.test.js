import React from 'react';
import { screen, render } from '@testing-library/react';
import ScatterChart from './ScatterChart';
import { createRandomMetric } from '../metrics/metricUtils'

describe("ScatterChart", () => {
    it('should render a canvas', () => {
        render(<ScatterChart metrics={[createRandomMetric()]} />)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
    it('should throw an error', () => {
        expect(() => render(<ScatterChart />)).toThrow("Metric atribute array is mandatory");
    })
    it('should throw an error', () => {
        expect(() => render(<ScatterChart metrics={[{}]} />)).toThrow("Bad metric structure");
    })
})

