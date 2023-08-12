import { useProducts } from '@/providers/productsProvider'
import styles from "./styles.module.scss";
import Product from '../product'


const Products = () => {

  const { products, productsShown, pageNumber } = useProducts();

  return (
    <main className={styles.products}>
      {!products && <p>Loading...</p>}
      {products.map((product, index) => {
       return (
          index >= (pageNumber * productsShown) - productsShown && index < pageNumber * productsShown  &&
          <Product
            key={product.id}
            category={product.category.name}
            description={product.description}
            image={product.images[0]}
            price={product.price}
            title={product.title} 
            id={String(product.id)}          
          />
        );
      })}
    </main>
  );
}

export default Products
