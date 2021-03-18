import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '19831402-766c30a230adf7d2aaf6df8e0';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = ({ q, page = 1 }) => {
  return axios.get('', { params: { q, page } }).then(res => res.data.hits);
};

fetchImages.propTypes = {
  queryResult: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchImages;
