import React from 'react'

const MainContainer = ({ children, props }) => {
    return (
        <div className='container-md' style={{ padding: '5rem' }} {...props}>{children}</div>
    )
}

export default MainContainer