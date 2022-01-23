import React from 'react';

// import { Container } from './styles';

function Button({ onClick }) {
    return (
        <>
            <button type="submit" className='btn btn-primary btn-lg' onClick={onClick}>Buscar</button>
        </>
    )
}

export default Button;