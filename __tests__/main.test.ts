import {wait} from '../src/wait'
import {expect, test, describe,jest} from '@jest/globals'
import { setOutput } from '@actions/core'
import {run} from '../src/main'

test('throws invalid number', async () => {
  const input = parseInt('foo', 10)
  await expect(wait(input)).rejects.toThrow('milliseconds not a number')
})

jest.mock('@actions/core')

describe('When running the action', () => {
  const fakeSetOutput = setOutput as jest.MockedFunction<typeof setOutput>

  test('it should set the release-url output parameter',async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
    
  })

})