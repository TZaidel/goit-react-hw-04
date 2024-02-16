import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';

import { fetchImages } from '../../api.js';
import SearchBar from '../SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn';
import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

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
				const fetchedImages = await fetchImages(query, page);
				setImages(prev => [...prev, ...fetchedImages]);
				// const response = await axios.get(
				// 	'https://api.unsplash.com/search/photos',
				// 	{
				// 		params: {
				// 			client_id: 'k-KTfIYFgOqtCuPX3B4HiwmSeyL2GsF0uwT4gKkf0pw',
				// 			query: query.split('/')[1],
				// 			page,
				// 		},
				// 	}
				// );
				// setImages(prev => [...prev, ...response.data.results]);
			} catch (error) {
				setError(true);
				console.log(error.message);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [query, page]);

	return (
		<div>
			<SearchBar onSearch={searchImages} />

			{images.length > 0 && <ImageGallery items={images} />}

			{images.length > 0 && <LoadMoreBtn onClick={handleClick} />}

			{loading && <Loader />}
			{error && <ErrorMessage />}
			<Toaster />
		</div>
	);
}

export default App;
