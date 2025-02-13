import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Word } from '../types';

interface Props {
	search: string;
}

export function useFetchWords({ search }: Props) {
	const getWord = async () => {
		try {
			const { data } = await axios.get(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
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
		queryKey: [search],
		queryFn: getWord,
		retry: 1,
		enabled: !!search,
	});

	return { data, isLoading, isError, error };
}
