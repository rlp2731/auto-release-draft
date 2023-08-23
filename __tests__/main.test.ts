import {expect, test, describe,jest} from '@jest/globals'
import { setOutput } from '@actions/core'
import {run} from '../src/main'

jest.mock('@actions/core')

describe('When running the action', () => {
  const fakeSetOutput = setOutput as jest.MockedFunction<typeof setOutput>

  test('it should set the release-url output parameter',async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
    
  })

})