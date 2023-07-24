import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
	const [count, setCount] = useState(initialValues?.count || value);

	let isMounted = useRef(false);

	const increaseBy = (value: number) => {
		let newValue = Math.max(count + value, 0);

		if (initialValues?.maxCount) {
			newValue = Math.min(newValue, initialValues.maxCount);
		}

		setCount(newValue);

		onChange && onChange({ count: newValue, product });
	};

	const reset = () => {
		setCount(initialValues?.count || 0);
	};

	useEffect(() => {
		if (!isMounted.current) return;
		setCount(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		count,
		maxCount: initialValues?.maxCount,
		isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === count,
		increaseBy,
		reset,
	};
};
