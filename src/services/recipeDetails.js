import axios from 'axios';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY

export const recipeDetail = async (path) => {
	try {
		const res = await axios.get(
			`https://recipe-book2.p.rapidapi.com/recipe-details`,
			{
				headers: {
					'x-rapidapi-host': 'recipe-book2.p.rapidapi.com',
					'x-rapidapi-key': rapidApiKey
				},
				params: {path: path}
			}
		);
        return res.data;
	} catch (err) {
		console.log(err);
	}
};
