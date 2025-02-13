import { Link, LinkProps } from 'react-router';

interface Props extends LinkProps {
	children: React.ReactNode | React.ReactNode[];
}

export function StyledLink(props: Props) {
	return (
		<Link
			className='cursor-pointer text-blue-600 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300'
			{...props}>
			{props.children}
		</Link>
	);
}
