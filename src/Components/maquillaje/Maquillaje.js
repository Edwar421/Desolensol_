import React from 'react'
import style from '../home/Home.module.css'
import TarjetasGridMaq from '../Tarjetas/TarjetasMaquillaje/CardMaq';


const Maquillaje = () => {
  return (
    <div className={style.incio1}>
            <div className={style.imagenesContainer}>
                <img src="CollageMaqui.jpg" alt="CollageMaqui" className={style.imagen} />
            </div>
            <div>
                <h1 className={style.title}>MAQUILLAJE</h1>
            </div>
            <div>
                <TarjetasGridMaq/>
            </div>
            
        </div>
    )
}

export default Maquillaje;