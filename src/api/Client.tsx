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

/* eslint-disable no-unused-vars  */
type CallbackWithArgsAnyReturn = (...args: any[]) => any;
/* eslint-enable no-unused-vars */

export const getPictures = async (pageNum: number, callback: CallbackWithArgsAnyReturn) => {
  try {
    const { data } = await client.get(`photos?page=${pageNum}`);
    callback(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPicturesBySearchTerm = async (pageNum: number, searchString: string, callback: CallbackWithArgsAnyReturn) => {
  try {
    const { data } = await client.get(`search/photos?page=${pageNum}&query=${searchString}`);
    callback(data.results);
  } catch (error) {
    console.log(error);
  }
};
