import { useContext } from "react";
import { GithubContext } from '../providers/github-providers'

const useGithubContext = () => {
    const { githubState, getUser, getUserRepos, getUserStarredRepos } = useContext(GithubContext)
    return { githubState, getUser, getUserRepos, getUserStarredRepos }
}

export default useGithubContext