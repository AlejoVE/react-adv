import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {
	const { increaseBy, count } = useProduct();

	return (
		<Provider value={{ product, increaseBy, count }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
				{/* <ProductImage img={product.image} />
			<ProductTitle title={product.title} />
			<ProductButtons increaseBy={increaseBy} count={count} /> */}
			</div>
		</Provider>
	);
};
