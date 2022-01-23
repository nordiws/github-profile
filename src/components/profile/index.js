import React from 'react';
import useGithubContext from '../../hooks/github-hooks'

function Profile() {
    const { githubState: { user } } = useGithubContext()

    return (
        <>
            <div style={{ marginTop: 160 }}>

                <img src={user.avatar_url} alt='User avatar' className='col-md-3 float-md-start mb me-3 ms-md-3 border border-secondary border-3 rounded-circle' />

                <div className='card' style={{ width: "18rem" }}>
                    <div className='card-header'>
                        <strong>{user.name}</strong>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className="list-group-item">
                            Username:&nbsp;
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel='noreferrer'
                                className="link-primary"
                            >
                                {user.login}
                            </a>
                        </li>
                        <li className="list-group-item">
                            Empresa: {user.company}
                        </li>
                        <li className="list-group-item">
                            Blog:&nbsp;
                            <a
                                href={user.blog}
                                target="_blank"
                                rel='noreferrer'
                                className="link-primary"
                            >
                                {user.blog}
                            </a>
                        </li>
                        <li className="list-group-item">
                            Seguidores: {user.followers}
                        </li>
                        <li className="list-group-item">
                            Following: {user.following}
                        </li>
                        <li className="list-group-item">
                            Gists: {user.public_gists}
                        </li>
                        <li className="list-group-item">
                            Repositórios: {user.public_repos}
                        </li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Profile;