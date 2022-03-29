export const APP_VERSION = 'v1.0.0'

export const APP_URL = ''

export const add = (a: number, b: number) => a + b

export const reverseStr = (str: string) => {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}
