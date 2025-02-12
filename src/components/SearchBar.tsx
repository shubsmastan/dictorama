import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import { updateSearch } from '../store';

export function SearchBar() {
	const [query, setQuery] = useState('');

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateSearch(query);
	};

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
				className='bg-gray-200 text-black p-2 px-10 rounded-md w-full'
			/>
		</form>
	);
}
