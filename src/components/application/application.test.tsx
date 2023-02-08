import { render, screen } from '@testing-library/react';
import Application from "./application";

describe('Application', () => {
    it('should render submit button', () => {
        render(<Application />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    it('should render checkbox', () => {
        render(<Application />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    })

    it('should render textbox', () => {
        render(<Application />);
        const textbox = screen.getByRole('textbox');
        expect(textbox).toBeInTheDocument();
    })

    it('should render option', () => {
        render(<Application />);
        const [option] = screen.getAllByRole('option');
        expect(option).toBeInTheDocument();
    })

    it('should render combobox', () => {
        render(<Application />);
        const [combobox] = screen.getAllByRole('combobox');
        expect(combobox).toBeInTheDocument();
    })
})
