import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../utils/context'
import Card from './index.jsx'

describe('Card', () => {
    test('Should render the card', async () => {
        render(
            <Card></Card>
        )
    })

})