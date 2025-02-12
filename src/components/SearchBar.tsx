import { useEffect, useState } from 'react';
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
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Start typing a word'
				value={query}
				onChange={handleChangeSearch}
				className='bg-gray-200 text-black p-2 rounded-md w-full'
			/>
		</form>
	);
}
