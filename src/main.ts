import * as core from '@actions/core'
import * as event from './event'

export async function run(): Promise<void> {
  try {
    const tag = event.getCreatedTag()

    
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
