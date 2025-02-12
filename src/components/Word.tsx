import { useEffect, useState } from 'react';
import { useFetchWord } from '../hooks/useFetchWord';
import { Word as WordType } from '../types';

export function Word() {
	const [entry, setEntry] = useState<WordType>();

	const { data, isLoading, error } = useFetchWord({ search: 'hello' });

	useEffect(() => {
		if (data && data.length > 0) setEntry(data[0]);
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
