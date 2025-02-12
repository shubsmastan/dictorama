import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

function App() {
	return (
		<>
			<Header />
			<main className='p-3 w-full'>
				<SearchBar />
			</main>
		</>
	);
}

export default App;
