"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


// Importar o componentes
import Header from "../components/Header/Header";
import CardProduct from "../components/Products/Product";

export default function Home() {
    return ( 
    <div className={styles.pageNotFound}>
         <Header
                Title="Loja de Eletrônicos"
                Subtitle="Os melhores produtos com os melhores preços!"
              />
            <div className={styles.notFoundContent}>
            
            <div className={styles.notFoundText}>
            <h1 className={styles.numberError}>404</h1>
            <p className={styles.textError}>Essa página não existe</p>
            <button className={styles.voltar} onClick={() => window.history.back()}>Voltar</button>
            <button className={styles.inicio} onClick={() => window.location.href = "/"}>Ir para a página inicial</button>
            </div>
            <Image 
              src="/img/NotFound.gif"
              alt="Página não encontrada"
              width={300}
              height={300}
                className={styles.notFoundImage}
            />            
            </div >
            
        <h1 className="Poppins">oo</h1>  
    </div>
  );
}
