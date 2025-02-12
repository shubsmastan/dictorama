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

	// avoids needing to use "?" every time
	if (!entry) return null;

	const meanings = entry.meanings[0].definitions.map(def => (
		<li key={def.definition}>{def.definition}</li>
	));

	const synonyms = entry.meanings[0].synonyms.join(', ');

	return (
		<div className='mt-5 rounded-md p-3 border-2 border-neutral-900 dark:border-neutral-100'>
			<h2>{entry.word}</h2>
			<p>{entry.phonetics[0].text}</p>

			<h2 className='font-bold'>{entry.meanings[0].partOfSpeech}</h2>

			<h3>Meanings:</h3>
			{/* FIXME better styling */}
			<ol className='list-decimal list-inside'>{meanings}</ol>

			<h3>Synonyms:</h3>
			<p>{synonyms}</p>

			{/* FIXME use a component */}
			<a className='' href={entry.sourceUrls} target='_blank'>
				{entry.sourceUrls}
			</a>
		</div>
	);
}
