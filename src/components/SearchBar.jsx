import toast from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
	const handleSubmit = e => {
		e.preventDefault();
		onSearch(e.target.elements.query.value);
		if (e.target.elements.query.value.trim('') === '') {
			toast.error('Search query is empty.');
			return;
		}
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name='query' type='text' placeholder='Search images and photos' />
			<button>Search</button>
		</form>
	);
}