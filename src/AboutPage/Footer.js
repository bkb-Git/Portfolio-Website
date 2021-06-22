import React from 'react';
import SNSNavBar from '../HomePage/SNSNavBar';
import sns from '../sns';

export default function Footer() {
    const snsNav = sns.slice(2);
    return (
        <div className='footer'>
            <SNSNavBar buttons={snsNav} page={3} />
        </div>
    )
}
