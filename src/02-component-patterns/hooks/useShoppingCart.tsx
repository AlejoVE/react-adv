import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductChange = ({ count, product }: { product: Product; count: number }) => {
		setShoppingCart((oldShoppingCart) => {
			// if (count === 0) {
			// 	const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			// 	return { ...rest };
			// }
			// return {
			// 	...oldShoppingCart,
			// 	[product.id]: { ...product, count },
			// };

			const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			// Delete product

			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return { ...rest };
		});
	};

	return {
		shoppingCart,
		onProductChange,
	};
};
