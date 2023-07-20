import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';
import { products } from '../assets/data';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
	const { onProductChange, shoppingCart } = useShoppingCart();
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<div
				style={{
					display: 'flex',
					flexBasis: 'row',
					flexWrap: 'wrap',
				}}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						className='bg-dark text-white'
						product={product}
						onChange={onProductChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage className='custom-image' />
						<ProductTitle title='My cool title' />
						<ProductButtons className='custom-buttons' />
					</ProductCard>
				))}
			</div>

			<div className='shopping-cart'>
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						className='bg-dark text-white'
						product={product}
						style={{ width: '100px' }}
						value={product.count}
						onChange={onProductChange}
					>
						<ProductImage className='custom-image' />
						<ProductButtons className='custom-buttons' />
					</ProductCard>
				))}
			</div>

			<div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div>
		</div>
	);
};

export default ShoppingPage;
