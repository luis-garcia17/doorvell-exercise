"use client"

import ProductsProvider from '@/providers/productsProvider';
import Link from 'next/link';
import styles from './styles.module.scss'
import Products from '../../components/products'
import Pagination from '../../components/pagination'

import { Literata } from "next/font/google";

const literata = Literata({ subsets: ["latin"] });

const PaginationPage = () => {

  return (
    <ProductsProvider>
      <div className={`${styles.doorvellExercise} ${literata.className}`}>
        <Link href="/" className={styles.mainPageLink}>
          {" "}
          <span> ← </span> Go back to main page{" "}
        </Link>
        <Products />
        <Pagination />
      </div>
    </ProductsProvider>
  );
}

export default PaginationPage