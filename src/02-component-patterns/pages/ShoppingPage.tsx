import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

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
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle title='My cool title' />
					<ProductButtons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
