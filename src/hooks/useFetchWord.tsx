import { useQuery } from '@tanstack/react-query';

export function useFetchWord() {
	const getWord = async () => {
		try {
			await new Promise(resolve => setTimeout(resolve, 5000));
			return 'hello';
		} catch (e) {
			console.log(e);
		}
	};

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['todos'],
		queryFn: getWord,
	});

	return { data, isLoading, isError, error };
}
