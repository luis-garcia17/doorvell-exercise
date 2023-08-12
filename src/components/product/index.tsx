import Image from "next/image";
import Link from 'next/link'
import styles from "./styles.module.scss";


type ProductProps = {id: string, category: string, description: string, image: string, price: number, title: string}

const Product = ({id, category, image, price, title}: ProductProps ) => {
  return (
    <article className={styles.product}>
      <figure>
        <Image
          src={image}
          width={253}
          height={314}
          alt="Picture of the author"
          className={styles.image}
        />
      </figure>

      <article className={styles.information}>
        <section className={styles.productName}>
          <h2 className={styles.title}> {title} </h2>
          <p className={styles.category}> {category} </p>
        </section>

        <section className={styles.priceAndButton}>
          <p className={styles.price}>
            $ <data value={price}> {price} </data>{" "}
          </p>
          <button> 
            <Link href={`/doorvell-exercise/${id}`}>
              Buy Now 
            </Link>
          </button>
        </section>
      </article>
    </article>
  );
};

export default Product;