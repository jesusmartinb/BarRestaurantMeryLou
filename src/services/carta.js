import { i } from './api';

export const getFirstCourse = async () => {
    try {
        const response = await i.get('/firstCourse');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getMainCourse = async () => {
    try {
        const response = await i.get('/main');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}