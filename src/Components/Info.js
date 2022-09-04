import React from 'react';

function Info() {
    return (
        <div id="info">
            <img id="profile-img" src={require('../Images/profile.png')} alt='profile' />
            <h1 className='info--name'>Kunal Bankoti</h1>
            <h3 className='info--job'>Web Developer</h3>
            <p className='info--site'>github.com/Kb739/</p>
            <div>
                <button className="email">
                    <img src={require("../Images/Icon.png")} alt="msg" />
                    Email</button>
                <button className="linkedin">
                    <img src={require("../Images/linkedin.png")} alt="linkedin" />
                    Linkedin</button>
            </div>
        </div>
    );
}
export default Info;