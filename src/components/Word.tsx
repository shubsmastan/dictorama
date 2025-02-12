import { useEffect, useState } from 'react';
import { useStore } from '@tanstack/react-store';

import { useFetchWord } from '../hooks/useFetchWord';
import { Word as WordType } from '../types';
import { store } from '../store';
import { Link } from './Link';

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
		<div className='mt-5 p-5 rounded-md border-2 border-neutral-900 dark:border-neutral-100'>
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

			<div className='mb-5 flex gap-2'>
				<h3 className='font-bold'>Synonyms:</h3>
				<p className='text-blue-700 dark:text-blue-300'>{synonyms}</p>
			</div>

			<div className='flex gap-2 py-2 text-gray-600 border-t-2 border-gray-600 dark:text-gray-400 dark:border-gray-400'>
				<h2 className='font-bold'>Source:</h2>
				<Link
					className='text-gray-600 underline hover:text-amber-700 dark:text-gray-400 dark:hover:text-amber-300'
					href={entry.sourceUrls}
					target='_blank'>
					{entry.sourceUrls}
				</Link>
			</div>
		</div>
	);
}
