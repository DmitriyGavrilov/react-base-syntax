import React from 'react';
import './UserOutput.css';

const UserOutput = ({ username }) => {
    return(
        <div className='UserOutput'>
            <p>Hey {username}!</p>
            <p>How are you?</p>
        </div>
    );
};

export default UserOutput;