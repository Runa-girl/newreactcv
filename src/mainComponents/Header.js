import React from 'react';
import foto from '../media/foto.jpg';
import '../App.css';

export function Header() {
    return ( 
    <header>
        <img src={foto} class="profielfoto" alt="Profilepicture" />
        <div className='title'>
            <h1>Desire van Geest</h1>
            <h3>Front end developer in de groei!</h3>
            <hr />
            <p>33 jaar, Amersfoort</p>
            <p><a href="mailto:desire.vangeest@gmail.com">desire.vangeest@gmail.com</a></p>
        </div>
    </header>
    );
}; 