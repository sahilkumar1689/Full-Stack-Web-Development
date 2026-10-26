import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import "@testing-library/jest-dom/vitest";
import App from './App';

describe("Greeting", () => {
    it('renders React Jest text', () => {
        render(<App />);
        const linkElement = screen.getByText(/React Jest/i);
        expect(linkElement).toBeInTheDocument();
    });
});

