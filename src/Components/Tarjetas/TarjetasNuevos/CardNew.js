import React from 'react';
import Slider from 'react-slick';
import style from '../Card.module.css';

const Card = ({ titulo, imagenes, descripcion, precio }) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Comprobación de la existencia de imagenes
    if (!imagenes || !imagenes.length) {
        return null; // O puedes mostrar un mensaje alternativo o un comportamiento diferente aquí
    }

    return (
        <div className={style.tarjeta}>
            <h3 className={style.subtitle}>{titulo}</h3>
            <Slider {...settings}>
                {imagenes.map((imagen, index) => (
                    <div key={index}>
                        <img className={style.img} src={imagen} alt={`${titulo} - Imagen ${index + 1}`} />
                    </div>
                ))}
            </Slider>
            <p className={style.paragraph}>{descripcion}</p>
            <p className={style.paragraph}>{precio}</p>
        </div>
    );
};

const TarjetasGridNew = () => {
    const tarjetas = [
        {
            titulo: 'Corset Corto',
            imagenes: ['CorsetCorto1.jpg', 'CorsetCorto2.jpg', 'CorsetCorto3.jpg', 'CorsetCorto4.jpg'],
            descripcion: 'Corset corto en blanco,negro y rojo',
            precio: "$27.000"
        },
        {
            titulo: 'Chaleco Impermeable',
            imagenes: ['ChalecoImp1.jpg'],
            descripcion: 'Chaleco impermeable todas las tallas',
            precio: "$40.000"
        },
        {
            titulo: 'Tarjeta 3',
            imagenes: ['Logo.png', 'Collage.jpg', 'Maquillaje.jpeg'],
            descripcion: 'Descripción de la tarjeta 1',
        },
        {
            titulo: 'Tarjeta 4',
            imagenes: ['Logo.png', 'Collage.jpg', 'Maquillaje.jpeg'],
            descripcion: 'Descripción de la tarjeta 1',
        },

        {
            titulo: 'Tarjeta 5',
            imagenes: ['Logo.png', 'Collage.jpg', 'Maquillaje.jpeg'],
            descripcion: 'Descripción de la tarjeta 1',
        },
        {
            titulo: 'Tarjeta 6',
            imagenes: ['Logo.png', 'Collage.jpg', 'Maquillaje.jpeg'],
            descripcion: 'Descripción de la tarjeta 1',
        },

        {
            titulo: 'Tarjeta 7',
            imagenes: ['Logo.png', 'Collage.jpg', 'Maquillaje.jpeg'],
            descripcion: 'Descripción de la tarjeta 1',
        },
        {
            titulo: 'Tarjeta 8',
            imagenes: ['Logo.png', 'Collage.jpg', 'Maquillaje.jpeg'],
            descripcion: 'Descripción de la tarjeta 1',
        },
        // Otras tarjetas...
    ];

    return (
        <div className={style.tarjetasgrid}>
            {tarjetas.map((tarjeta, index) => (
                <Card
                    key={index}
                    titulo={tarjeta.titulo}
                    imagenes={tarjeta.imagenes}
                    descripcion={tarjeta.descripcion}
                    precio={tarjeta.precio}
                />
            ))}
        </div>
    );
};

export default TarjetasGridNew;
