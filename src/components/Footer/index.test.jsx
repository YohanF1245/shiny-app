import { ThemeProvider } from '../../utils/context'
import { fireEvent, render, screen } from '@testing-library/react'
import Footer from './index.jsx'
 
describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
        <ThemeProvider>
            <Footer />
        </ThemeProvider>)
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton).toHaveTextContent('Changer de mode : ☀️')
        fireEvent.click(nightModeButton)
        expect(nightModeButton).toHaveTextContent('Changer de mode : 🌙')
    })
})