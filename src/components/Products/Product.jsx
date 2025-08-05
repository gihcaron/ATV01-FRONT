"use client";
import React from 'react';
import Image from "next/image";
import styles from './Product.module.css';

export default function Product({}) {
    return (
        <div className={styles.productCard}  data-category="smartphones">
        <div className={styles.productImage}>
           <Image
            src="https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s24-62-galaxy-ai-256gb-preto-5g-8gb-ram-cam-tripla-50mp-selfie-12mp-bateria-4000mah-dual-chip/magazineluiza/238095300/e7d6a769c701da9491194643ae02c865.jpg"
            alt="Smartphone Samsung Galaxy S24"
            width={200}
            height={200}
            className={styles.productPicture}
            />
        </div>
        <div className={styles.productTitle}>iPhone 15 Pro Max 256GB</div>
        <div className={styles.productPrice}>R$ 8.999,00</div>
        <div className={styles.productDescription}>O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras
            profissional.</div>
        <div className={styles.producRating}>
            <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
            <span>(4.8) - 1.234 avaliações</span>
        </div>
    </div>
    )
}