"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


// Importar o componentes
import Header from "../components/Header/Header";
import CardProduct from "../components/Products/Product";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro Max 256GB",
      price: "R$ 8.999,00",
      description: "O mais avançado iPhone já criado, com chip A17 Pro...",
      image: "/img/iphone15.jpg",
      rating: {
        stars: 5,
        count: 4.8,
        reviews: 1234
      },
      category: "smartphones"
    },
    {
      id: 2,
      title: "Samsung Galaxy S24 Ultra 512GB",
      price: "R$ 7.499,00",
      description: "Galaxy AI revolucionário, S Pen integrada...",
      image: "https://m.media-amazon.com/images/I/71maEAgjPdL._UF1000,1000_QL80_.jpg",
      rating: {
        stars: 5,
        count: 4.7,
        reviews: 987
      },
      category: "smartphones"
    },
    {
      id: 3,
      title: "MacBook Pro 16\" M2 Pro",
      price: "R$ 19.999,00",
      description: "Desempenho extremo com chip M2 Pro...",
      image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png",
      rating: {
        stars: 5,
        count: 4.9,
        reviews: 456
      },
      category: "laptops"
    },
    {
      id: 4,
      title: "Dell XPS 13 Plus",
      price: "R$ 8.499,00",
      description: "Design elegante e desempenho poderoso...",
      image: "https://m.media-amazon.com/images/I/71y+RCosJ7L.jpg",
      rating: {
        stars: 5,
        count: 4.6,
        reviews: 321
      },
      category: "laptops"
    },
    {
      id: 5,
      title: "Sony WH-1000XM5",
      price: "R$ 2.499,00",
      description: "Fones de ouvido com cancelamento de ruído líder de mercado...",
      image: "https://www.sony.com.br/image/6539959b6c50b04c5cec4e23134c1137?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
      rating: {
        stars: 5,
        count: 4.8,
        reviews: 654
      },
      category: "headphones"
    },
    {
      id: 6,
      title: "Bose QuietComfort 45",
      price: "R$ 2.199,00",
      description: "Experiência de áudio premium com conforto excepcional...",
      image: "https://m.media-amazon.com/images/I/51aXvjzcukL.jpg",
      rating: {
        stars: 5,
        count: 4.7,
        reviews: 432
      },
      category: "headphones"
    },
    {
      id: 7,
      title: "Apple Watch Series 9",
      price: "R$ 3.499,00",
      description: "Monitoramento avançado de saúde e integração total com iPhone.",
      image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png",
      rating: {
        stars: 5,
        count: 4.8,
        reviews: 789
      },
      category: "wearables"
    },
    {
      id: 8,
      title: "Amazon Echo Dot 5ª Geração",
      price: "R$ 399,00",
      description: "Assistente inteligente com Alexa, som aprimorado.",
      image: "https://m.media-amazon.com/images/I/71xoR4A6q-L._UF894,1000_QL80_.jpg",
      rating: {
        stars: 4,
        count: 4.5,
        reviews: 1023
      },
      category: "smart-home"
    },
    {
      id: 9,
      title: "GoPro HERO12 Black",
      price: "R$ 2.999,00",
      description: "Câmera de ação com vídeo 5.3K e estabilização avançada.",
      image: "https://static.gopro.com/assets/blta2b8522e5372af40/blt86b2d5c67d4f1ed5/64d0e286369276296caf7a71/02-pdp-h12b-gallery-1920.png",
      rating: {
        stars: 5,
        count: 4.9,
        reviews: 512
      },
      category: "cameras"
    },
    {
      id: 10,
      title: "Kindle Paperwhite 11ª Geração",
      price: "R$ 799,00",
      description: "Leitor de eBooks com tela antirreflexo e luz ajustável.",
      image: "https://conteudoespecial.fastshop.com.br/conteudo/amazon/alexa/produto_04/images/29.png",
      rating: {
        stars: 5,
        count: 4.8,
        reviews: 1340
      },
      category: "e-readers"
    }

  ]);



  return (
    <div className={styles.page}>
      <Header
        Title="Loja de Eletrônicos"
        Subtitle="Os melhores produtos com os melhores preços!"
        TotalProducts="Total de"
        productsCount={products.length }
      />

      <div className={styles.TotalProducts}>

        {products.length === 0 ? < Image src="/gif/123.gif" width={250} height={250} alt="Loading..." /> : products.map((product) =>
          <CardProduct
            key={product.id}  
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            stars= {`${product.rating.stars} estrelas` } 
            count={product.rating.count}
            reviews={`${product.rating.reviews}`}
          />)}


      </div>
    </div>
  );
}
