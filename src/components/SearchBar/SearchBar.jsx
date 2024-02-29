import toast from 'react-hot-toast';
import './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
	const handleSubmit = e => {
		e.preventDefault();
		if (e.target.elements.query.value.trim('') === '') {
			toast.error('Search query is empty.');
			return;
		}
		onSearch(e.target.elements.query.value);
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name='query' type='text' placeholder='Search images and photos' />
			<button>Search</button>
		</form>
	);
}
