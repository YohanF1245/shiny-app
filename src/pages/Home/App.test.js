import {sum} from './App.jsx'
import {test, expect} from 'vitest'

test('ma fonction sum', () => {
    const result = sum(3,7)

    expect(result).toBe(10)
})
