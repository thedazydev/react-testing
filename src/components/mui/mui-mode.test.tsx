import { render, screen } from '../../test-utils'
import { MuiMode } from './mui-mode'

describe('mui-mode', () => {
    test('renders text correctly', () => {
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })
})