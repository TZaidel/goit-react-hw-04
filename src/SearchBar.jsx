import toast from 'react-hot-toast';

// const notify = () => toast('Search query is empty.');

export default function SearchBar({ onSubmit }) {
	const handleSubmit = e => {
		e.preventDefault();

		if (e.target.query.value.trim() === '') {
			toast.error('Search query is empty.');
			return;
		}

		onSubmit(e.target.query.value);
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name='query' type='text' placeholder='Search images and photos' />
			<button type='submit'>Search</button>
		</form>
	);
}
