import { FaBook } from 'react-icons/fa';

export function Header() {
	return (
		<header className='p-6 h-20 w-full bg-sky-200 md:px-12 lg:px-24 xl:px-48 dark:bg-sky-900'>
			<div className='flex gap-3 items-center justify-center'>
				<FaBook size='25px' />
				<h1 className='text-xl font-bold'>Dictorama</h1>
			</div>
		</header>
	);
}
