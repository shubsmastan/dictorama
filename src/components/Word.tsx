import { Word as WordType } from '../types';

interface Props {
	entry: WordType;
}

export function Word({ entry }: Props) {
	const meanings = entry.meanings.map(meaning => {
		return meaning.definitions.map(def => def.defintion);
	});

	return (
		<div className='mt-5'>
			<p>{entry.word}</p>
			<p>{entry.phonetic}</p>
			{meanings}
		</div>
	);
}
