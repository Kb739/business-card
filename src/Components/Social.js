import React from 'react'

function Social() {
    return (
        <div className='social'>
            <button>
                <img src={require('../Images/twitter.png')} alt='twitter.png' />
            </button>
            <button>
                <img src={require('../Images/fb.png')} alt='twitter.png' />
            </button>
            <button>
                <img src={require('../Images/ig.png')} alt='twitter.png' />
            </button>
            <button>
                <img src={require('../Images/github.png')} alt='twitter.png' />
            </button>
        </div>
    )
}
export default Social