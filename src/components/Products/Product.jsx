"use client";
import React from 'react';
import Image from "next/image";
import styles from './Product.module.css';

export default function CardProduct({image, title, description, price, stars, count, reviews}) {
    const NomeExibido = title ? title : "Titulo não definido";
    const DescricaoExibida = description ? description : "Descrição não definida";

    return (
        <div className={styles.productCard}  data-category="smartphones">
        <div className={styles.productImage}>
           <Image
            src={image}
            alt="Smartphone Samsung Galaxy S24"
            width={200}
            height={200}
            priority={true}
            className={styles.productPicture}
            />
        </div>
        <div className={styles.productTitle}>{NomeExibido}</div>
        <div className={styles.productPrice}>{price}</div>
        <div className={styles.productDescription}>
            {DescricaoExibida}
        </div>
        <div className={styles.producRating}>
            <span className={styles.stars}>{stars}</span>
            <span>{count} - {reviews} avaliações</span>
        </div>
    </div>
    )
}