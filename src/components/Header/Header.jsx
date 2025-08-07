"use client";
import React from 'react';
import styles from './Header.module.css';


export default function Header({Title, Subtitle, TotalProducts, productsCount}) {
    return (
        <div className={styles.Header}>
        <h1>🛒 {Title}</h1>
        <p>{Subtitle}</p>
        {productsCount > 0 && (
          <p>📊 {TotalProducts} <span id="totalProducts" > {productsCount} {productsCount !== 1 ? 'produtos' : 'produto'}</span></p>
        )}
      </div>
    )
}