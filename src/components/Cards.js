import React from 'react';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{
    
    const options = {year: 'numeric', month: 'long', day: 'numeric'}

    if(!confirmed){
        return(
            <h1>Loading...</h1>
        )
    }
        return(
            <div className='cards-container'>
                <div className='card'>
                    <h2>Infectados</h2>
                    <p className='casos'>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator={'.'}
                            />
                    </p>
                    <p className='fecha'>{new Date(lastUpdate).toLocaleDateString('es-ES', options)}</p>
                    <p className='descripcion descripcion-contagios'>Número de casos activos de COVID-19</p>
                </div>

                <div className='card'>
                    <h2>Recuperados</h2>
                    <p className='casos'>
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator={'.'}
                        />
                    </p>
                    <p className='fecha'>{new Date(lastUpdate).toLocaleDateString('es-ES', options)}</p>
                    <p className='descripcion descripcion-recuperados'>Número de recuperados de COVID-19</p>
                </div>

                <div className='card'>
                    <h2>Muertes</h2>
                    <p className='casos'>
                        <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator={'.'}
                        />
                    </p>
                    <p className='fecha'>{new Date(lastUpdate).toLocaleDateString('es-ES', options)}</p>
                    <p className='descripcion descripcion-muertes'>Número de muertes por COVID-19</p>
                </div>
            </div>
        )
}

export default Cards