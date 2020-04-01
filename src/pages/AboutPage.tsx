import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC =() =>{
    const history = useHistory()
    return <>
    <h1>Страница информаци </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sit unde dolorum eum aut illum perspiciatis eligendi nulla, tempore quasi praesentium ad id blanditiis hic. Dolorum ducimus impedit doloremque facilis?</p>
    <button className="btn" onClick={()=>history.push('/')}>Обратно к списку дел</button>
    </>
}

