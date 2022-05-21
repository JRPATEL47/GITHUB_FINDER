const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
  headers:{
    Authorization: `token ${GITHUB_TOKEN}`,},
  })

  const {items} = await response.json()

  return items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  

  const response1 = await fetch(`${GITHUB_URL}/users/${login}`,{
    headers:{
      Authorization: `token ${GITHUB_TOKEN}`,},
    })
  
    const user = await response1.json()

    const response2 = await fetch(`${GITHUB_URL}/users/${login}/repos`,{
      headers:{
        Authorization: `token ${GITHUB_TOKEN}`,},
      })
    
      const repos = await response2.json()

  return { user: user, repos: repos }
}
