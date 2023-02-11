import { render, screen } from "@testing-library/react";
import user  from "@testing-library/user-event";
import Counter from "./counter";

describe('Counter', () => {
    render(<Counter />)

    it('should render the counter', () => {
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(incrementButton).toBeInTheDocument()
    })

    it('should render a count of zero', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    it('renders a count of one after clicking button', async () => {
        render(<Counter />)
        user.setup()
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    it('renders a count of two after clicking button', async () => {
        render(<Counter />)
        user.setup()
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.dblClick(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })

    it('renders a count of 10 after setclicking button', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button', {
            name: 'Set'
        })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')        
    })
})