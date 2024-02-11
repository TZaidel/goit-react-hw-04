import { useEffect, useState } from 'react';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

function App() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [value, setValue] = useState('');
	const [input, setInput] = useState('');
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchImages(query) {
			try {
				setValue(query);
				setImages([]);
				setLoading(true);
				setError(false);

				const response = await axios.get(
					'https://api.unsplash.com/search/photos',
					{
						params: {
							client_id: 'k-KTfIYFgOqtCuPX3B4HiwmSeyL2GsF0uwT4gKkf0pw',
							query: query,
						},
					}
				);

				setImages(response.data.results);
			} catch (error) {
				console.error('Error fetching images:', error);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchImages(value);
	}, [value]);

	const handleSubmit = query => {
		setValue(query);
	};

	const handleClick = () => {
		setPage(page + 1);
	};

	useEffect(() => {
		if (input === '') {
			return;
		}
		console.log('aaa', input, page);
	}, [input, page]);

	return (
		<>
			<SearchBar onSubmit={handleSubmit} value={value} />
			{loading && (
				<p>
					<InfinitySpin width='1000' color='blue' />
				</p>
			)}
			{error && <h2>Error! Try later.</h2>}
			<Toaster />
			{images.length > 0 && <ImageList item={images} />}
			<button onClick={handleClick}>Load more</button>
		</>
	);
}

export default App;
