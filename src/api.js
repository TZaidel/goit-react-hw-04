import axios from 'axios';

export const fetchImages = async (query, page) => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		params: {
			client_id: 'k-KTfIYFgOqtCuPX3B4HiwmSeyL2GsF0uwT4gKkf0pw',
			query: query.split('/')[1],
			page,
		},
	});
	return response.data.results;
};
