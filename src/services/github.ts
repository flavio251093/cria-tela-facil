import { Octokit } from '@octokit/rest'

class GitHubService {
  private octokit: Octokit | null

  constructor() {
    this.octokit = null
  }

  initialize(token: string) {
    this.octokit = new Octokit({
      auth: token,
    })
  }

  async getRepositories() {
    if (!this.octokit) throw new Error('GitHub not initialized')
    
    try {
      const { data } = await this.octokit.rest.repos.listForAuthenticatedUser({
        sort: 'updated',
        per_page: 100,
      })
      return data
    } catch (error) {
      console.error('Error fetching repositories:', error)
      throw error
    }
  }

  async createIssue(owner: string, repo: string, title: string, body: string) {
    if (!this.octokit) throw new Error('GitHub not initialized')
    
    try {
      const { data } = await this.octokit.rest.issues.create({
        owner,
        repo,
        title,
        body,
      })
      return data
    } catch (error) {
      console.error('Error creating issue:', error)
      throw error
    }
  }

  async getIssues(owner: string, repo: string) {
    if (!this.octokit) throw new Error('GitHub not initialized')
    
    try {
      const { data } = await this.octokit.rest.issues.listForRepo({
        owner,
        repo,
        state: 'all',
        per_page: 100,
      })
      return data
    } catch (error) {
      console.error('Error fetching issues:', error)
      throw error
    }
  }

  async updateIssue(owner: string, repo: string, issueNumber: number, updates: any) {
    if (!this.octokit) throw new Error('GitHub not initialized')
    
    try {
      const { data } = await this.octokit.rest.issues.update({
        owner,
        repo,
        issue_number: issueNumber,
        ...updates,
      })
      return data
    } catch (error) {
      console.error('Error updating issue:', error)
      throw error
    }
  }
}

export const githubService = new GitHubService()