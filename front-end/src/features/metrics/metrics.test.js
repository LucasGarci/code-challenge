import React from 'react';
import { screen, render } from '@testing-library/react';
import Metrics from './Metrics';

describe("Metrics", () => {
    it('should have the Enviar métricas button', () => {
        render(<Metrics />)
        expect(screen.getByRole('button', { name: /Añadir métrica/i })).toBeInTheDocument()
    })
    it('should have the Enviar métricas button', () => {
        render(<Metrics />)
        expect(screen.getByRole('button', { name: /Enviar métricas/i })).toBeInTheDocument()
    })

    it("should display de A group even if empty", () => {
        render(<Metrics />)
        expect(screen.getByText(/group A/i)).toBeInTheDocument()
    })
    it("should display de B group even if empty", () => {
        render(<Metrics />)
        expect(screen.getByText(/group B/i)).toBeInTheDocument()
    })
    it("should display de Uncategorized group even if empty", () => {
        render(<Metrics />)
        expect(screen.getByText(/Uncategorized/i)).toBeInTheDocument()
    })
})



