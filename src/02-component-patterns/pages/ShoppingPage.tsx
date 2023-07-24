import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';
import { products } from '../assets/data';

const product = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Page</h1>
			<hr />
			<ProductCard
				key={product.id}
				className='bg-dark text-white'
				product={product}
				initialValues={{
					count: 4,
					maxCount: 10,
				}}
			>
				{({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
					<>
						<ProductImage className='custom-image' />
						<ProductTitle title='My cool title' />
						<ProductButtons className='custom-buttons' />
						<button onClick={reset}>reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>

						{!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
						<span>{count}</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};

export default ShoppingPage;
