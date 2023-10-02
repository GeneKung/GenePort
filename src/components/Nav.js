import React from 'react';

export default function Nav() {
    return(
        <navbar className = "nav">
            <a href = "/" className = "site-title">Gene's Website</a>
            <ul>
                <li>
                    <a href = "/About">About</a>
                </li>
                <li>
                    <a href = "/Projects">Projects</a>
                </li>
                <list>
                    <a href = "/Contact Me">Contact Me</a>
                </list>
            </ul>
        </navbar>
    );
}