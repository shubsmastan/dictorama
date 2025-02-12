import { useEffect, useState } from 'react';
import { useStore } from '@tanstack/react-store';

import { useFetchWord } from '../hooks/useFetchWord';
import { Word as WordType } from '../types';
import { store, updateSearch } from '../store';
import { Link } from './Link';

export function Word() {
	const [entry, setEntry] = useState<WordType>();

	const search = useStore(store, state => state.search);

	const { data, isLoading, error } = useFetchWord({ search });

	useEffect(() => {
		if (data && data.length > 0) setEntry(data[0]);
		console.log(data);
	}, [data]);

	// FIXME improve
	if (isLoading) {
		return <p>Loading</p>;
	}

	// FIXME improve
	if (error) {
		return <p>{error.message}</p>;
	}

	// avoids needing to use "?" every time
	if (!entry) return null;

	const phonetics = entry.phonetics.length > 0 ? entry.phonetics[0].text : '';

	const meanings = entry.meanings[0].definitions.map(def => (
		<li key={def.definition} className='mb-1 md:mb-2 lg:mb-3'>
			{def.definition}
		</li>
	));

	const synonyms = entry.meanings[0].synonyms;

	return (
		<div className='mt-5 p-5 rounded-md border-2 border-neutral-900 dark:border-neutral-100'>
			<div className='mb-4 lg:mb-6'>
				<h2 className='text-3xl font-bold lg:text-5xl'>{entry.word}</h2>
				<p className='lg:text-xl'>{phonetics}</p>
			</div>

			<h2 className='font-bold mb-4 lg:text-xl lg:mb-6'>
				{entry.meanings[0].partOfSpeech}
			</h2>

			<div className='mb-4 lg:mb-6'>
				<h3 className='font-bold mb-1 md:mb-2 lg:mb-3'>Meanings:</h3>
				<ol className='pl-5 list-decimal list-outside'>{meanings}</ol>
			</div>

			<div className='mb-5 lg:mb-8'>
				<h3 className='font-bold md:mb-2 lg:mb-3'>Synonyms:</h3>
				{synonyms.map((synonym, i) => {
					return (
						<span key={synonym}>
							<Link
								data-value={synonym}
								// FIXME change this to href with updated URL params
								onClick={() => {
									updateSearch(synonym);
								}}>
								{synonym}
							</Link>
							{i !== synonyms.length - 1 && <span>{', '}</span>}
						</span>
					);
				})}
			</div>

			<div className='flex flex-col py-2 text-gray-600 border-t-2 border-gray-600 sm:flex-row sm:gap-2 dark:text-gray-400 dark:border-gray-400'>
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
