import { test, expect } from '@playwright/test'

const { render } = require('@testing-library/react')
const { App } = require('../App')
test('display text', async () => {
  const { getByText } = render(<App />)
  const text = getByText(/app de gatitos/)
  expect(text).toBeInTheDocument()
// eslint-disable-next-line eol-last
})