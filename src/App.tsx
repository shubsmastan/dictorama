import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
// import { Word } from './components/Word';

function App() {
	return (
		<>
			<Header />
			<main className='p-3 w-full'>
				<SearchBar />
				{/* <Word /> */}
			</main>
		</>
	);
}

export default App;
