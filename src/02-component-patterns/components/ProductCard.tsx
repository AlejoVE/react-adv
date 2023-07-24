import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import {
	InitialValues,
	onChangeArgs,
	Product,
	ProductCardHandlers,
	ProductContextProps,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
	product: Product;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: ProductCardProps) => {
	const { increaseBy, count, maxCount, isMaxCountReached, reset } = useProduct({
		onChange,
		product,
		value,
		initialValues,
	});

	return (
		<Provider value={{ product, increaseBy, count, maxCount, reset, isMaxCountReached }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({ count, maxCount, isMaxCountReached, increaseBy, product, reset })}
				{/* <ProductImage img={product.image} />
			<ProductTitle title={product.title} />
			<ProductButtons increaseBy={increaseBy} count={count} /> */}
			</div>
		</Provider>
	);
};
