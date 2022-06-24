import React from 'react'

function Link(props)
{
    return(
        <>
            <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href={props.href}>{props.name}</a>
            </li>                                                                                            
        </>
    );
}
export default Link;