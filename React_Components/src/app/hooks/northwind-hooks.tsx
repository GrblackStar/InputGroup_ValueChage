import { getCategories, getCustomers } from '../services/northwind';
import { useEffect, useState } from 'react';

export const useGetCategories = () => {
	const [Categories, setCategories] = useState([]);

	useEffect(() => {
		let ignore = false;
		getCategories()
			.then((data) => {
				if (!ignore) {
					setCategories(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	return Categories;
}

export const useGetCustomers = () => {
	const [Customers, setCustomers] = useState([]);

	useEffect(() => {
		let ignore = false;
		getCustomers()
			.then((data) => {
				if (!ignore) {
					setCustomers(data);
				}
			})
		return () => {
			ignore = true;
		}
	}, []);

	return Customers;
}
