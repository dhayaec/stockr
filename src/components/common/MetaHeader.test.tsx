import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import MetaHeader from './MetaHeader'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

describe('load home page', () => {
  test('loads MetaHeader', async () => {
    render(<MetaHeader />, {
      container: document.head,
    })
    expect(document.title).toBe('CMS BASE')
  })
})
