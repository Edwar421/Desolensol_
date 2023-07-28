import React from 'react'
import style from '../home/Home.module.css'
import TarjetasGridAcce from '../Tarjetas/TarjetasAccesorios/CardAcce';


const Accesorios = () => {
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
                <h1 className={style.title}>ACCESORIOS</h1>
            </div>
            <div>
                <TarjetasGridAcce/>
            </div>
            
        </div>
    )
}

export default Accesorios;