'use client'

import Link from 'next/link'
import styles from './styles.module.scss'
import { Product } from '@/providers/productsProvider';
import { useProducts } from "@/providers/productsProvider";


export const generateStaticParams = async () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { products } = useProducts();

  return products.map((item: Product) => ({
    id: item.id,
  }));
};

const ProductPage = ({ params }: { params: { id: string } }) => {  
  return (
    <main className={styles.productPage}>
      My product id is: {params.id} and this must match the id on the URL
      <Link href="/doorvell-exercise">← Go back to products</Link>
    </main>
  );
};

export default ProductPage;
