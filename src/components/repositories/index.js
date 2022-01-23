
import React, { useEffect, useState } from 'react';
import useGithubContext from '../../hooks/github-hooks';
import RepositoryItem from '../repositoryItem';

function Repositories() {

    const { githubState: { user, repositories, starred }, getUserRepos, getUserStarredRepos } = useGithubContext()
    const [hasUserSearch, setHasUserSearch] = useState(false)

    useEffect(() => {
        const { login } = user
        if (login) {
            getUserRepos(login)
            getUserStarredRepos(login)
        }
        setHasUserSearch(true)
    }, [hasUserSearch])

    starred.sort()

    return (
        <div style={{ marginTop: 50 }}>

            {hasUserSearch ? (
                <>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="repositories-tab" data-bs-toggle="tab" data-bs-target="#repositories" type="button" role="tab" aria-controls="repositories" aria-selected="true">Repositories</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="starred-tab" data-bs-toggle="tab" data-bs-target="#starred" type="button" role="tab" aria-controls="starred" aria-selected="false">Starred</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="repositories" role="tabpanel" aria-labelledby="repositories-tab">

                            <div className='row'>
                                {repositories.map(item => (
                                    <RepositoryItem
                                        key={item.id}
                                        name={item.name}
                                        linkToRepo={item.html_url}
                                        fullName={item.full_name}
                                    />
                                ))}
                            </div>

                        </div>
                        <div className="tab-pane fade" id="starred" role="tabpanel" aria-labelledby="starred-tab">

                            <div className='row'>
                                {starred.map(item => (
                                    <RepositoryItem
                                        key={item.id}
                                        name={item.name}
                                        linkToRepo={item.html_url}
                                        fullName={item.full_name}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}

        </div>
    )
}

export default Repositories;