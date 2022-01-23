import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: []
})

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    })


    const getUser = (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }))

        api.get(`users/${username}`)
            .then(({ data }) => {
                const { id, avatar_url, login, name, html_url, blog, company, location, followers, following, public_gists, public_repos } = data
                setGithubState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id,
                        avatar_url,
                        login,
                        name,
                        html_url,
                        blog,
                        company,
                        location,
                        followers,
                        following,
                        public_gists,
                        public_repos
                    }
                }))
            })
            .catch((error) => console.error('Something went wrong: ' + error))
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading
                }))
            })
    }

    const getUserRepos = (username) => {
        api.get(`users/${username}/repos`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    repositories: data
                }))
            })
            .catch((error) => console.error('Something went wrong: ' + error))
    }

    const getUserStarredRepos = (username) => {
        api.get(`users/${username}/starred`)
            .then(({ data }) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    starred: data
                }))
            })
            .catch((error) => console.error('Something went wrong: ' + error))
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarredRepos: useCallback((username) => getUserStarredRepos(username), [])
    }

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubProvider