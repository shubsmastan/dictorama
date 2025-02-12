import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Word } from '../types';

export function useFetchWord() {
	const getWord = async () => {
		try {
			const { data } = await axios.get(
				'https://api.dictionaryapi.dev/api/v2/entries/en/hello'
			);

			return data as Word[];
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				throw new Error('No definitions found.');
			} else {
				throw new Error('An unknown error occured.');
			}
		}
	};

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['word'],
		queryFn: getWord,
		retry: 1,
	});

	return { data, isLoading, isError, error };
}
