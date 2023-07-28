import React from 'react'
import style from '../home/Home.module.css'
import TarjetasGridRopa from '../Tarjetas/TarjetasRopa/CardRopa';


const Ropa = () => {
  return (
    <div className={style.incio1}>
            <div className={style.imagenesContainer}>
                <div className={style.imagenColumn}>
                    <img src="Maquillaje.jpeg" alt="Maquillaje" className={style.imagen} />
                </div>
                <div className={style.imagenColumn}>
                    <img src="collage.jpg" alt="Collage" className={style.imagen} />
                </div>
            </div>
            <div>
                <h1 className={style.title}>ROPA</h1>
            </div>
            <div>
                <TarjetasGridRopa/>
            </div>
            
        </div>
    )
}

export default Ropa;