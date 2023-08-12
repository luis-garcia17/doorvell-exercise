import { useProducts } from "@/providers/productsProvider";
import styles from './styles.module.scss'

const Pagination = () => {

  const { products, productsShown, pageNumber, setPageNumber, numberOfPages } = useProducts();
  let number = 0;

  
  return (
    <nav className={`${styles.pagination} pagination`}>
      <ul>
        <li
          onClick={(e) => {
            e.preventDefault();
            pageNumber > 1 && setPageNumber(pageNumber - 1);
          }}
        >
          <a href=""> &lt; </a>
        </li>
        <li onClick={(e) => setPageNumber(parseInt(e.currentTarget.innerText))}>
          {" "}
          <a href="#"> 1 </a>{" "}
        </li>
        {products.map((product, index) => {
          index % productsShown === 0 && number++;
          return (
            index > numberOfPages &&
            index % productsShown === 0 && (
              <li
                key={product.id}
                onClick={(e) =>
                  setPageNumber(parseInt(e.currentTarget.innerText))
                }
              >
                {" "}
                <a href="#"> {number} </a>{" "}
              </li>
            )
          );
        })}

        <li
          onClick={(e) => {
            e.preventDefault();
            pageNumber < numberOfPages && setPageNumber(pageNumber + 1);
          }}
        >
          <a href=""> &gt; </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination