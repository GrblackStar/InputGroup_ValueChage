import { CategoriesType } from '../models/northwind/categories-type';
import { CustomersType } from '../models/northwind/customers-type';

export async function getCategories(): Promise<CategoriesType[]> {
	const response = await fetch('./static-data/northwind-categories-type.json');
	if (!response.ok) {
		return Promise.reject(response.statusText);
	}
	return response.json();
}

export async function getCustomers(): Promise<CustomersType[]> {
	const response = await fetch('./static-data/northwind-customers-type.json');
	if (!response.ok) {
		return Promise.reject(response.statusText);
	}
	return response.json();
}
