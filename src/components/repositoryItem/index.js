import React from 'react';

// import { Container } from './styles';

function RepositoryItem({ name, linkToRepo, fullName }) {
    return (
        <div className='col-4 card'>
            <div className='card-body'>
                <h5 className='card-title'><strong>{name}</strong></h5>
                <a href={linkToRepo} target='_blank' rel='noreferrer' className="link-primary">
                    {fullName}
                </a>
            </div>
        </div >
    )
}

export default RepositoryItem;