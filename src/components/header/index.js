import React, { useState, useEffect } from 'react';
import useGithubContext from '../../hooks/github-hooks'
import Button from '../button'
import githubIcon from '../../assets/img/githubicon.png'

function Header() {
    const { githubState, getUser } = useGithubContext()
    const [usernameSearch, setUsernameSearch] = useState()

    const handleGetUser = () => {
        if (!usernameSearch || usernameSearch == '') {
            githubState.hasUser = false
            return
        }
        return getUser(usernameSearch)
    }

    const handleSetUsername = ({ target: { value } }) => setUsernameSearch(value)

    return (
        <nav className='container fixed-top navbar-light bg-light'>

            <div className='row'>


                <div style={{ width: "10%", height: "10%", marginTop: 5 }}>
                    <img src={githubIcon} className='col-md-6 float-md-end mb-3 ms-md-3' alt='GitHub Icon' />
                </div>

                <div className='col'>
                    <h1 className='fs-1'>Github Profile</h1>
                </div>

            </div>

            <div className='row'>

                <div className='col'>
                    <div className='form-floating mb-3'>
                        <input
                            type="text"
                            className='form-control me-2'
                            id='username-input'
                            placeholder='Digite o username para pesquisar no github...'
                            onChange={handleSetUsername}
                            onBlur={handleGetUser}
                        />
                        <label htmlFor='username-input'>Digite o username para pesquisar no github...</label>
                    </div>
                </div>

                <div className='col-md-auto'>
                    <Button onClick={handleGetUser}></Button>
                </div>
            </div>

        </nav >
    )
}

export default Header;