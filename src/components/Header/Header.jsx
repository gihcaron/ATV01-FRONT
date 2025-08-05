"use client";
import React from 'react';
import styles from './Header.module.css';

export default function Header({Title, Subtitle, TotalProducts}) {
    return (
        <div className={styles.Header}>
        <h1>🛒 {Title}</h1>
        <p>{Subtitle}</p>
        <p>📊 {TotalProducts} <span id="totalProducts">0</span></p>
      </div>
    )
}