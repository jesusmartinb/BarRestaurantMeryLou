import axios from 'axios';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY

export const searchRecipe = async (search) => {
	try {
		const res = await axios.get(
			`https://recipe-book2.p.rapidapi.com/search-recipes`,
			{
				headers: {
					'x-rapidapi-host': 'recipe-book2.p.rapidapi.com',
					'x-rapidapi-key': rapidApiKey
				},
				params: {query: search, page: '1'}
			}
		);
        return res.data;
	} catch (err) {
		console.log(err);
	}
};
