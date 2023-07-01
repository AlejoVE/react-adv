import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
	const { increaseBy, count } = useProduct();

	return (
		<Provider value={{ product, increaseBy, count }}>
			<div className={styles.productCard}>
				{children}
				{/* <ProductImage img={product.image} />
			<ProductTitle title={product.title} />
			<ProductButtons increaseBy={increaseBy} count={count} /> */}
			</div>
		</Provider>
	);
};
