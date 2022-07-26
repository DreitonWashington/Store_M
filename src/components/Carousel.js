import React from 'react';
import imgBanner from '../img/bannerMountain.png'
import imgBanner2 from '../img/adventureBanner.jpg'
import imgBanner3 from '../img/saleF.jpg'

const Carousel = () =>{
    return(
        <div className = "concarousel">
            <div id="carouselControl" className="carousel slide" data-bs-ride="carousel">
            <div className="concarousel__item carousel-inner">
                <div className="concarousel__item carousel-item active">
                    <img src={imgBanner} className="d-block concarousel__item" alt="Mulher sentada com produtos Mountain"/>
                </div>
                <div className="concarousel__item carousel-item">
                    <img src={imgBanner2} className="d-block special" alt="Homem de terno"/>
                </div>
                <div className="concarousel__item carousel-item">
                    <img src={imgBanner3} className="d-block special" alt="Banner de 50% de desconto"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControl" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControl" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>  
        </div>
    )
}

export default Carousel;