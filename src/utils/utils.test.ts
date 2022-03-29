import { reverseStr } from './utils'

describe('utils', () => {
  test('reverseStr should reverse string', () => {
    expect(reverseStr('hello')).toEqual('olleh')
  })
})
