import { Store } from '@tanstack/store';

export const store = new Store({
	search: '',
});

export const updateSearch = (search: string) => {
	store.setState(state => {
		return {
			...state,
			search,
		};
	});
};
