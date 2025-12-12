# GitHub MCP Usage Guide

## What is an MCP Server?

An MCP (Model Context Protocol) server is a standardized interface that allows AI assistants to interact with external tools and services. MCP servers provide a way for AI agents to access real-time data, perform actions, and integrate with various platforms (like GitHub, databases, APIs, etc.) in a secure and controlled manner. Think of it as a bridge that enables the AI to extend its capabilities beyond just code analysis to actual system interactions.

The GitHub MCP Server is GitHub's official MCP server implementation, providing comprehensive access to GitHub's API through a standardized interface. Official repository: [github/github-mcp-server](https://github.com/github/github-mcp-server)

## Priority: Use GitHub MCP Wherever Possible

**IMPORTANT**: When working with GitHub-related tasks (creating issues, pull requests, managing repositories, reading code, etc.), you MUST use the GitHub MCP server instead of direct API calls or manual instructions. The GitHub MCP provides a standardized, secure, and efficient way to interact with GitHub.

### When to Use GitHub MCP:
- Creating, reading, updating, or closing GitHub issues
- Creating, reviewing, or managing pull requests
- Reading repository files and code
- Managing branches and commits
- Accessing repository metadata
- Searching repositories, issues, pull requests, and users
- Managing security advisories
- Working with GitHub Copilot and Copilot Spaces (available in Remote GitHub MCP Server)
- Any GitHub API interactions

## Setup Instructions (Remote/Web MCP Server)

If the GitHub MCP server is not already configured, follow these steps to set it up:

### Prerequisites
- A GitHub account
- An MCP client that supports remote server connections
- Either a GitHub Personal Access Token (PAT) OR OAuth authentication configured

### Authentication Methods

The Remote GitHub MCP Server supports two authentication methods. Choose the one that best fits your needs:

#### Option 1: Personal Access Token (PAT)

1. **Create a GitHub Personal Access Token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a descriptive name (e.g., "MCP Server Access")
   - Select the following scopes based on your needs:
     - `repo` (full control of private repositories) - required for most operations
     - `read:org` (if working with organization repos)
     - `read:user` (read user profile data)
     - Additional scopes as needed for your specific use case
   - Generate the token and **copy it immediately** (you won't see it again)

2. **Configure the Remote MCP Server with PAT**:
   - The GitHub MCP server should be configured in your MCP client settings
   - Configure it to use the Remote GitHub MCP Server (web-based version)
   - Add the following configuration to your MCP client settings:
     ```json
     {
       "mcpServers": {
         "github": {
           "url": "https://api.githubcopilot.com/mcp/",
           "env": {
             "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
           }
         }
       }
     }
     ```
   - Replace `your_token_here` with the Personal Access Token you created

#### Option 2: OAuth Authentication

1. **Set up OAuth Application** (if not already configured):
   - The Remote GitHub MCP Server supports OAuth authentication
   - Ensure your MCP client application is configured to handle OAuth flows
   - OAuth provides a more secure, token-based authentication that doesn't require storing long-lived tokens

2. **Configure the Remote MCP Server with OAuth**:
   - Configure your MCP client to use OAuth authentication for the GitHub MCP Server
   - The MCP client should handle the OAuth flow automatically
   - Add the following configuration to your MCP client settings:
     ```json
     {
       "mcpServers": {
         "github": {
           "url": "https://api.githubcopilot.com/mcp/",
           "auth": {
             "type": "oauth"
           }
         }
       }
     }
     ```
   - Your MCP client will prompt you to authenticate via GitHub's OAuth flow when first connecting

### Setup Steps

After choosing your authentication method (PAT or OAuth) and configuring it above, proceed with verification:

3. **Verify Setup**:
   - Check if the GitHub MCP server is available by listing MCP resources
   - You should see GitHub-related resources available
   - Test by attempting to read a repository file or list issues
   - The Remote GitHub MCP Server provides extensive tools including:
     - Repository management (create, read, update, delete)
     - Issue management (create, read, update, close, search)
     - Pull request management (create, read, update, merge, review)
     - Code and file operations (read, search, create, update)
     - User and organization operations
     - Security advisories
     - GitHub Copilot integration (create pull requests with Copilot, manage Copilot Spaces)
     - GitHub Support Docs Search
   - Note: The Remote GitHub MCP Server includes additional tools for GitHub Copilot and Copilot Spaces that are not available in the local version

### Security Notes
- **For PAT authentication**: Never commit the Personal Access Token to version control
- **For PAT authentication**: Store it securely in environment variables or secure configuration
- **For OAuth authentication**: The OAuth flow handles token management securely
- Use the minimum required scopes for your use case
- Rotate tokens periodically (especially for PAT)
- OAuth is generally preferred for better security as it doesn't require storing long-lived tokens

## Usage Guidelines

- Always check if GitHub MCP is available before attempting GitHub operations
- If GitHub MCP is not available, inform the user and provide the setup steps above
- Prefer MCP methods over direct API calls or manual GitHub CLI commands
- When GitHub MCP is unavailable, fall back to clear instructions for the user to perform the action manually
- The Remote GitHub MCP Server provides additional Copilot features not available in local versions

## Reference

For the latest documentation and updates, refer to the official repository: [https://github.com/github/github-mcp-server](https://github.com/github/github-mcp-server)
