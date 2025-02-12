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
			<div className='mb-4'>
				<h2 className='text-3xl font-bold'>{entry.word}</h2>
				<p>{entry.phonetics[0].text}</p>
			</div>

			<h2 className='font-bold mb-4'>{entry.meanings[0].partOfSpeech}</h2>

			<div className='mb-4'>
				<h3 className='font-bold'>Meanings:</h3>
				{/* FIXME better styling */}
				<ol className='list-decimal list-inside'>{meanings}</ol>
			</div>

			<div className='mb-4 flex gap-3'>
				<h3 className='font-bold'>Synonyms:</h3>
				<p className='text-cyan-800 dark:text-cyan-200'>{synonyms}</p>
			</div>

			{/* FIXME use a component */}
			<a className='' href={entry.sourceUrls} target='_blank'>
				{entry.sourceUrls}
			</a>
		</div>
	);
}
