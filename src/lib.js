import React from 'react'
import text from './greetings.json'

export const hello = (
    <h1 id='title'
        className='header'
    >
    {text.hello}
    </h1>
);
