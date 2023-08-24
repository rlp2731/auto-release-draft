import * as github  from '@actions/github'

export async function createReleaseDraft(versionTag: string, repoToken: string, changelog: string): Promise<string> {
    const octokit = new github.GitHub(repoToken)

    const repsponse = await octokit.repos.createRelease({owner:'',repo:'',tag_name:''})
}