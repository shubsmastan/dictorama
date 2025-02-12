import { useEffect, useState } from 'react';
import { useStore } from '@tanstack/react-store';

import { useFetchWord } from '../hooks/useFetchWord';
import { Word as WordType } from '../types';
import { store } from '../store';

export function Word() {
	const [entry, setEntry] = useState<WordType>();

	const search = useStore(store, state => state.search);

	const { data, isLoading, error } = useFetchWord({ search });

	useEffect(() => {
		if (data && data.length > 0) setEntry(data[0]);
		console.log(data);
	}, [data]);

	if (isLoading) {
		return <p>Loading</p>;
	}

	if (error) {
		return <p>{error.message}</p>;
	}

	const meanings = entry?.meanings.map((meaning, i) => (
		<p key={i}>{meaning.partOfSpeech}</p>
	));

	return (
		<div className='mt-5'>
			<p>{entry?.word}</p>
			{meanings}
		</div>
	);
}
