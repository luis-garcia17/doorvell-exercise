"use client";

import { createContext, useContext, useEffect, useState, ReactNode, FC } from "react";

type ProductsType = {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  pageNumber: number,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  numberOfPages: number,
  setNumberOfPages: React.Dispatch<React.SetStateAction<number>>,
  productsShown: number,
  setProductsShown: React.Dispatch<React.SetStateAction<number>>
}

export type Product = {
  category: {creationAt: string, id: number, name: string, image: string, updatedAt: string},
  creationAt: string,
  description: string,
  id: number,
  images: string[],
  price: number,
  title: string,
  updatedAt: string
} 

type Props = {
  children: ReactNode;
}

const ProductsContext = createContext<ProductsType>({} as ProductsType);

const ProductsProvider: FC<Props> = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(1);
  const [productsShown, setProductsShown] = useState<number>(4);

  useEffect(() => {

    (async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
        );
        const data = await response.json();
        setProducts(data);
        setNumberOfPages(Math.ceil(data.length / productsShown));
      } catch (err) {
        console.error(err);
      }

    })();
    
  }, [])

  return (
    <ProductsContext.Provider
     value={{ 
      products, 
      setProducts, 
      pageNumber, 
      setPageNumber, 
      numberOfPages,
      setNumberOfPages,
      productsShown,
      setProductsShown
       }}>

      {" "}
      {children}{" "}

    </ProductsContext.Provider>
  );
};

/* Manipulate state in components */
export const useProducts = () => useContext(ProductsContext); 

export default ProductsProvider;
