import React from 'react'
import {render} from '@testing-library/react'
import {App} from './App'

test('Always true', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
