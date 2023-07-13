import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';

export interface ProductImageProps {
	img?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: ProductImageProps) => {
	const { product } = useContext(ProductContext);

	let imgToShow: string;

	if (img) {
		imgToShow = img;
	} else if (product.image) {
		imgToShow = product.image;
	} else {
		imgToShow = noImage;
	}
	return <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt='Coffee Mug' />;
};
