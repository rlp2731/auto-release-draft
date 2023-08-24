import * as core from '@actions/core'
import * as event from './event'
import * as version from './version'
import * as git from './git'

export async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token')
    
    const tag = event.getCreatedTag()

    if (tag && version.isSemver(tag)) {
        const changelog = await git.getChangesIntroducedByTag(tag)

        core.debug(`Detected changelog:\n${changelog}`)
    }
    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
