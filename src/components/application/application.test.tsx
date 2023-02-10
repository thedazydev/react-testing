import { render, screen } from '@testing-library/react';
import Application from "./application";

describe('Application', () => {

    it('should render header', () => {
        render(<Application />);
        const header = screen.getAllByRole('heading');
        expect(header[1]).toBeInTheDocument();
    })

    it('should render h1', () => {
        render(<Application />);
        const header = screen.getByRole('heading', {
                level: 1
            }
        );
        expect(header).toBeInTheDocument();
    })

    it('should render h2', () => {
        render(<Application />);
        const header = screen.getByRole('heading', {
                level: 2
            }
        );
        expect(header).toBeInTheDocument();
    })

    it('should render name', () => {
        render(<Application />);
        const name = screen.getByLabelText(/name/i, {
            selector: 'input'
        })
        expect(name).toBeInTheDocument();
    })

    it('should render placeholder text', () => {
        render(<Application />);
        const placeholder = screen.getByPlaceholderText(/name/i)
        expect(placeholder).toBeInTheDocument();
    })

    it('should render name', () => {
        render(<Application />);
        const name = screen.getByLabelText(/name/i)
        expect(name).toBeInTheDocument();
    })

    it('should render paragraph', () => {
        render(<Application />);
        const paragraph = screen.getByText('fields are mandatory', {exact: false});
        expect(paragraph).toBeInTheDocument();
    })

    it('should render paragraph content', () => {
        render(<Application />);
        const paragraph = screen.getByText((content) => content.startsWith('All'));
        expect(paragraph).toBeInTheDocument();
    })


    it('should render element with start value', () => {
        render(<Application />);
        const val = screen.getByDisplayValue("start")
        expect(val).toBeInTheDocument();
    })

    it('should render terms and conditions', () => {
        render(<Application />);
        const terms = screen.getByLabelText('I agree to the terms and conditions');
        expect(terms).toBeInTheDocument();
    })

    it('should render close', () => {
        render(<Application />);
        const x = screen.getByTitle('close');
        expect(x).toBeInTheDocument();
    })

    it('should render testid', () => {
        render(<Application />);
        const element = screen.getByTestId('custom-element');
        expect(element).toBeInTheDocument();
    })

    it('should render img', () => {
        render(<Application />);
        const img = screen.getByAltText('guy working');
        expect(img).toBeInTheDocument();
    })

    it('should render checkbox', () => {
        render(<Application />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    })

    it('should render name textbox', () => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox", {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();
    })

    it('should render bio textbox', () => {
        render(<Application />);
        const bioElement = screen.getByRole("textbox", {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();
    })

    it('should render textbox', () => {
        render(<Application />);
        const [textbox] = screen.getAllByRole('textbox');
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
