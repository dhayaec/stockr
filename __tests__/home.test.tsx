import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../pages'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('load home page', () => {
  test('loads and displays greeting', async () => {
    // ARRA NGE
    render(<Home />)

    // ACT
    await screen.findByTestId('heading')

    // ASSERT
    expect(await screen.findByTestId('heading')).toHaveTextContent('Stockr')
  })
})
