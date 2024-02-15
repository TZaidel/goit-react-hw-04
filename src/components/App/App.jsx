import { useEffect, useState } from 'react';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';
import './App.css';

import SearchBar from '../SearchBar';
import ImageList from '../ImageList/ImageList';

function App() {
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleClick = () => {
		setPage(page + 1);
	};

	const searchImages = async newQuery => {
		setQuery(`${Date.now()}/${newQuery}`);
		setImages([]);
		setPage(1);
		setError(false);
	};

	useEffect(() => {
		if (query === '') {
			return;
		}
		async function fetchData() {
			try {
				setLoading(true);
				const response = await axios.get(
					'https://api.unsplash.com/search/photos',
					{
						params: {
							client_id: 'k-KTfIYFgOqtCuPX3B4HiwmSeyL2GsF0uwT4gKkf0pw',
							query: query.split('/')[1],
							page,
						},
					}
				);
				console.log(response.data);
				setImages(prev => [...prev, ...response.data.results]);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [query, page]);

	return (
		<div>
			<SearchBar onSearch={searchImages} />

			{images.length > 0 && <ImageList items={images} />}

			{images.length > 0 && <button onClick={handleClick}>Load more</button>}

			{loading && (
				<p>
					<InfinitySpin width='1000' color='blue' />
				</p>
			)}
			{error && <p>Error</p>}
			<Toaster />
		</div>
	);
}

export default App;
