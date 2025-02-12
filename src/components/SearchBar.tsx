export function SearchBar(props: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<>
			<input
				type='text'
				placeholder='Start typing a word'
				className='bg-gray-200 text-black p-2 rounded-md w-full'></input>
		</>
	);
}
