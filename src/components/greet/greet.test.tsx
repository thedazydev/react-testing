import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('should render hello', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})

test('greet renders with a name', () => {
    render(<Greet name="Jane" />)
    const textElement = screen.getByText('Hello Jane')
    expect(textElement).toBeInTheDocument()
})

test('should render h2 message', () => {
    render(<Greet />)
    const textElement = screen.getByText(/I'm a React App/i)
    expect(textElement).toBeInTheDocument()
})

test('h2 renders with a name', () => {
    render(<Greet company='Google' />)
    const textElement = screen.getByText(`I'm a React App, Google`)
    expect(textElement).toBeInTheDocument()
})