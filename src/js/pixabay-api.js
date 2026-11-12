import axios from 'axios';

const base_URL = 'https://pixabay.com/api/';
const API_KEY = `58482734-7189c7d07ec575dfee762a78f`;

export const getImagesByQuery = query => {
  return axios
    .get(base_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
};
