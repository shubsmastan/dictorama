import { useEffect, useState } from 'react';

export function SearchBar() {
	const [query, setQuery] = useState('');
	const [debouncedQuery, setDebouncedQuery] = useState(query);

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedQuery(query);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [query]);

	useEffect(() => {
		if (debouncedQuery) {
			console.log('Debounced query:', debouncedQuery);
		}
	}, [debouncedQuery]);

	return (
		<>
			<input
				type='text'
				placeholder='Start typing a word'
				value={query}
				onChange={handleChangeSearch}
				className='bg-gray-200 text-black p-2 rounded-md w-full'
			/>
		</>
	);
}
