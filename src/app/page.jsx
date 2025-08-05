"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

// Importar o componentes
import Header from "../components/Header/Header";
import Product from "../components/Products/Product";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header
        Title="Loja de Eletrônicos"
        Subtitle="Os melhores produtos com os melhores preços!"
        TotalProducts="Total de produtos"
      />

      <div className={styles.TotalProducts}>
      
        <Product />

      </div>
    </div>
  );
}
