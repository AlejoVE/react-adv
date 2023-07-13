import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

const product = {
	id: '1',
	title: 'Coffee Mug',
	image: './coffee-mug.png',
};

export const ShoppingPage = () => {
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
				<ProductCard className='bg-dark text-white' product={product}>
					<ProductImage className='custom-image' />
					<ProductTitle title='My cool title' />
					<ProductButtons className='custom-buttons' />
				</ProductCard>

				<ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
					<ProductImage />
					<ProductTitle title='My cool title' />
					<ProductButtons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductCard.Image className='custom-image' />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
