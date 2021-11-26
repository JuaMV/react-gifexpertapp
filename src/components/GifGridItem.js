import React from 'react'

export const GifGridItem = ({id, title, url}) => {
//tambien se puede parsar por props
    //console.log(id, title, url)

    return (
        <div className = "card animate__animated animate__fadeIn">
            <img src = { url } alt = { title } />
            <p>{title}</p>
        </div>
    )
}
