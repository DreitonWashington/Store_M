import React from "react";

import '../img/productsImg/jacket_yellow_mk.jpg'
import '../img/productsImg/jeans_mountain.jpg'
import '../img/productsImg/mountain_mk_blackandwhite.jpg'
import '../img/productsImg/mk_moletom.jpg'
import '../img/productsImg/mountain_shirt_newcool.jpg'
import '../img/productsImg/young_mountain.jpg'

const product = [
    {
        name: "Vans Jaqueta Earth",
        marca: "Vans",
        preco: "R$ 350,00",
        imgFile: require('../img/productsImg/jacket_yellow_mk.jpg') ,
        imgAlt: "Vans Jaqueta Earth",
        id: 1
    },
    {
        name: "New York Bronx",
        marca: "Mountain",
        preco: "R$ 150,00",
        imgFile: require('../img/productsImg/young_mountain.jpg') ,
        imgAlt: "New York Bronx",
        id: 2
    },
    {
        name: "Mountain New Cool",
        marca: "Mountain",
        preco: "R$ 100,00",
        imgFile: require('../img/productsImg/mountain_shirt_newcool.jpg') ,
        imgAlt: "Mountain New Cool",
        id: 3
    },
    {
        name: "Mountain MK",
        marca: "Mountain",
        preco: "R$ 100,00",
        imgFile: require('../img/productsImg/mk_moletom.jpg') ,
        imgAlt: "Mountain MK",
        id: 4
    },
    {
        name: "Mountain MK Black",
        marca: "Mountain",
        preco: "R$ 100,00",
        imgFile: require('../img/productsImg/mountain_mk_blackandwhite.jpg') ,
        imgAlt: "Mountain MK Black",
        id: 5
    },
    {
        name: "Element Shirt Black",
        marca: "Element",
        preco: "R$ 250,00",
        imgFile: require('../img/productsImg/jeans_mountain.jpg') ,
        imgAlt: "Element Shirt Black",
        id: 6
    }
]
const Card = () =>{
    let products = []
    for(let i = 0 ; i<product.length ; i++){
        products.push(
        <div className="card">
        <div className="card__img">
            <img src={product[i].imgFile} alt={product[i].imgAlt}></img>
        </div>
        <h3 className='card__name'>{product[i].name}</h3>
        <div className='card__preco'>{product[i].preco}</div>
        <button className='card__button'>COMPRAR</button>
        </div>)
    }
    return(
        products
    )
}

export default Card