import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { CiSearch } from 'react-icons/ci';

import { updateSearch } from '../store';

export function SearchBar() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [query, setQuery] = useState('');

	const param = searchParams.get('search');

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		setSearchParams({ search: e.target.value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateSearch(query);
		setSearchParams({ search: query });
	};

	useEffect(() => {
		setQuery(param || '');
	}, [param]);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateSearch(query);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [query]);

	return (
		<form className='relative' onSubmit={handleSubmit}>
			<CiSearch className='absolute py-2 text-[#8e8e8e]' size='40px' />
			<input
				type='text'
				placeholder='Start typing a word'
				value={query}
				onChange={handleChangeSearch}
				className='border-[1px] border-black bg-gray-200 text-black p-2 px-10 rounded-md w-full dark:border-transparent'
			/>
		</form>
	);
}
