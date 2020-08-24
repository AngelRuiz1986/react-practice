import React from 'react'
import { useFetchGifs } from '../hooks/UseFetchGifs'

export const GifGrid = ({category}) => 
{
    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
        <h2>{ category }</h2>

        { loading && 'Cargando... ' }
        
        <div className="card-container">
        {
            images.map((images) => 

                <div key={images.url} className="card animate__animated animate__fadeInDown">
                    <img src={images.url} alt="Avatar"></img>
                    <div className="container">
                        <h4><b>{images.id}</b></h4>
                        <p>{images.title}</p>
                    </div>
                </div>
            )
        }
        </div>
        </>
    )

    
}
