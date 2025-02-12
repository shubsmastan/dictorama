import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Word } from './components/Word';

function App() {
	return (
		<>
			<Header />
			<main className='p-6 w-full md:px-12 lg:px-24 xl:px-48'>
				<SearchBar />
				<Word />
			</main>
		</>
	);
}

export default App;
