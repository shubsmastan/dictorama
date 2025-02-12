interface Props extends React.ComponentProps<'a'> {
	children: React.ReactNode | React.ReactNode[];
}

export function Link(props: Props) {
	return (
		<a
			className='cursor-pointer text-blue-600 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300'
			{...props}>
			{props.children}
		</a>
	);
}
