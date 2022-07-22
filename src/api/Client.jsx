import axios from 'axios';

const baseURL = 'https://api.unsplash.com/';
const apiAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const client = (() => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Client-ID ${apiAccessKey}`
    }
  });
})();

export const getPictures = async (pageNum, callback) => {
  try {
    const { data } = await client.get(`photos?page=${pageNum}`);
    callback(data);
  } catch (error) {
    console.log(error);
  }
};
